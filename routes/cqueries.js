const express = require('express')
const app = express.Router()
const config = require('../knexfile')
const environment = process.env.NODE_ENV || 	'development'
const pg = require('knex')(config[environment])

app.patch('/:id', (req, res, next) => {
  pg('hikes')
  .update({votes: req.body.votes})
  .where({id: req.params.id})
  .returning('*')
  .then(hikes => res.json(hikes[0]))
  .catch(err => next(err))
})

app.post('/:id', (req, res, next) => {
  pg('comment')
    .insert({comments: req.body.comments, link_id: req.params.id})
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

module.exports = app
