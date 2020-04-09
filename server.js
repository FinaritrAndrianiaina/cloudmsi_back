var express = require("express")
var utils = require("./module/utils")
var asyncLib = require("async")
var Configuration = require("./module/config")
var config = new Configuration("config.json")
var db = config.Database
var bodyParser = require("body-parser")
var cors = require("cors")
var app = express()
var bcrypt = require("bcrypt")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./CRUD/delete')(app, db, utils, asyncLib, bcrypt)
require('./CRUD/get')(app, db, utils, asyncLib, bcrypt)
require('./CRUD/post')(app, db, utils, asyncLib, bcrypt)
require('./CRUD/update')(app, db, utils, asyncLib, bcrypt)

app.listen(config.port)
