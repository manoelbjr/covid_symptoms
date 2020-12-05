/**
 * Esse módulo é respponsável por criar a conexão com o banco de dados SQlite
 */
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./ubs.db');

module.exports = db;