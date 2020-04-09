var mysql = require('mysql')
var bodyParser = require("body-parser")
var cors = require("cors")
var session = require("express-session")

module.exports = function (filepath, app, express) {
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

    if (json.cors) app.use(cors())

    if (json.session.active) {
        app.use(session({
            secret: json.session.secret,
            resave: json.session.resave,
            saveUninitialized: json.session.saveUninitialized,
            cookie: { secure: json.session.cookieSecure }
        }))
    }

    for (i = 0; i < json.staticpath.length; i++)
        app.use(json.staticpath[i].name, express.static(json.staticpath[i].path))

    if (json.bodyParser.json)
        app.use(bodyParser.json())
    if (json.bodyParser.urlencoded)
        app.use(bodyParser.urlencoded({ extended: true }))

    this.port = json.port
}