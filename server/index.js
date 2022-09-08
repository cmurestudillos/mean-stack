const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');
const chalk = require('chalk');

const app = express();

conectarDB();

app.use(cors());

app.use(express.json({ extended: true }));

const port = process.env.PORT || 4000;

app.use('/api/usuarios', require('./routes/usuarios'));

app.listen(port, '0.0.0.0', () => {
  console.log(`El servidor esta funcionando en el puerto: ${chalk.yellow(port)}`);
})