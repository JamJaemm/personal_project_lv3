const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
