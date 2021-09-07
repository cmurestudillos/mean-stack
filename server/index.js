// Librerias y dependencias del servidor
const express = require('express');
// importar funcion que conecta con la BBDD
const conectarDB = require('./config/db');
// Importar CORS
const cors = require('cors');
const chalk = require('chalk');

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar Cors
app.use(cors());

// Habilitar leer los valores de un body
app.use(express.json({ extended: true }));

// Puerto de la app
const port = process.env.PORT || 4000;

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
  console.log(`El servidor esta funcionando en el puerto: ${chalk.yellow(port)}`);
})