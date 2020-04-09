var mysql = require('mysql')

module.exports = function (filepath) {
    file = require("fs").readFileSync(filepath, "utf-8")
    json = JSON.parse(file)

    this.Database = {
        connexion: mysql.createConnection({
            host: json.database.host,
            user: json.database.user,
            password: json.database.pwd,
            database: json.database.dbname
        })
    }

    this.port = json.port
}