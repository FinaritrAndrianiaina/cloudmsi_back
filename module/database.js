var mysql = require('mysql')

module.exports = function (username, host, password, database) {
    this.connexion = mysql.createConnection({
        host: host,
        user: username,
        password: password,
        database: database
    })
}