const connection = require('../config/configDB')

let auth = (req, res) => {
    let email = req.body.email
    let password = req.body.password

    authUser(email, password, (err, result) => {
        if (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en el servidor'
            })
        } else {
            if (result.length === 0) {
                return res.status(401).send({
                    status: 'error',
                    message: 'Credenciales inválidas'
                })
            } else {
                return res.status(200).send({
                    status: 'success',
                    message: 'Sesión iniciada'
                })
            }
        }
    });
}

function authUser(email, password, callback) {
    const sql = 'select * from usuarios where email = ? and contrasena = ?'
    const values = [email, password];
    connection.execute(sql, values, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    })
}

module.exports = {
    auth
}
