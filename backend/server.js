const express = require('express')

const app = express();
const port = 3000;
// base de datos en postgres, username: postgres, password: 00000, port: 5432, db-name: gestint-db
app.listen(port, () => {
    console.log('Servidor activo')
});