const knex = require('knex');

const config = require('../knexfile.js').development;

module.export = knex(config)