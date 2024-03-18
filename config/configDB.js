const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Usuarios',
    port: 3306
});

connection.connect((error) => {
    if (error) {
      console.error('Error conectando a la base de datos MySQL:', error);
    } else {
      console.log('¡Conexión exitosa a la base de datos MySQL!');
    }
});

module.exports = connection;
