const express = require('express')
const app = express.Router()
const config = require('../knexfile')
const environment = process.env.NODE_ENV || 	'development'
const pg = require('knex')(config[environment])

app.get('/', (req, res, next) => {
  pg('hikes')
    .then(links => {
      return pg('comment')
        .whereIn('link_id', links.map(p => p.id))
        .then((comments) => {
          const commentsByLinkId = comments.reduce((result, comment) => {
            result[comment.link_id] = result[comment.link_id] || []
            result[comment.link_id].push(comment)
            return result
          }, {})
          links.forEach(link => {
            link.comments = commentsByLinkId[link.id] || []
          })
          res.json(links)
        })
    })
    .catch(err => next(err))
})

app.post('/', (req, res, next) => {
  pg('hikes')
    .insert(req.body)
    .returning('*')
    .then(hikes => res.json(hikes[0]))
    .catch(err => next(err))
})

app.delete('/:id', (req, res, next) => {
  pg('hikes')
    .where({id: req.params.id})
    .del()
    .returning('*')
    .then(hikes => res.json(hikes[0]))
    .catch(err => next(err))
})

app.patch('/:id', (req, res, next) => {
  pg('hikes')
    .where({id: req.params.id})
    .update(req.body)
    .returning('*')
    .then(hikes => res.json(hikes[0]))
    .catch(err => next(err))
})

module.exports = app
