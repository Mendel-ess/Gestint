const express = require('express');
const sequelize = require('./db/connection');
const { Console } = require('console');
const app = express();
const port = 3000;


try {
    sequelize.authenticate();
    console.log('base de datos conectada....');
} catch (error) {
    console.log('error', error);
}
app.listen(port, () => {
    console.log('SERVER UP....')
})