const Sequalize = require('sequelize');

const DB_NAME = 'node-todo';
const DB_USER = 'root';
const DB_PASSWORD = 'root';

const sequelize = new Sequalize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: '::1',
  dialect: 'mysql',
});

module.exports = sequelize;
