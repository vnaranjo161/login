const connection = require('../config/configDB');

let register = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let phoneNumber = req.body.phoneNumber;

  registerUser(email, password, name, lastName, phoneNumber, (error, result) => {
      if (error) {
          return res.status(500).send({
              status: 'error',
              error: error
          });
      } else {
          return res.status(201).send({
              status: 'success',
              message: 'Usuario registrado correctamente'
          });
      }
  });
}

function registerUser(email, password, name, lastName, phoneNumber, callback) {
  const sql = 'INSERT INTO usuarios (email, contrasena, nombre, apellido, numero) VALUES (?, ?, ?, ?, ?)';
  const values = [email, password, name, lastName, phoneNumber];
  connection.execute(sql, values, (error, result) => {
      if (error) {
          callback(error, null);
      } else {
          callback(null, result);
      }
  });
}


module.exports = {
    register
}