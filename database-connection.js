// use data from knexfile.js, use this to find stuff in knexfile.js
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile.js')
const environmentConfig = config[environment]
const knex = require('knex')
const connection = knex(environmentConfig)

module.exports = connection
