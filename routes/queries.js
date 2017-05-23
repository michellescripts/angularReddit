const express = require('express')
const app = express.Router()
const config = require('../knexfile')
const environment = process.env.NODE_ENV || 	'development'
const pg = require('knex')(config[environment])

app.get('/', (req, res, next) => {
  console.log('routes hit')
  pg('hikes')
    .then(hikes => {
      res.json(200, hikes)
    })
    .catch(err => next(err))
})

module.exports = app
