const { Sequelize, Model }= require('sequelize');

const sequelize = new Sequelize('gestint-db', 'postgres', '00000', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;