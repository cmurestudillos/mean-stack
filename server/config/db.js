// importamos mongoose para la conexion con la BBDD
const mongoose = require('mongoose');
const chalk = require('chalk');

const conectarDB = async() => {
    try {
        console.log(chalk.blue('Conexion a BBDD.'));
    } catch (error) {
        console.log(chalk.red('Ha ocurrido un error.'));
        console.log(error);
        process.exit(1); 
    }
}

module.exports = conectarDB;