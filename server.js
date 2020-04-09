var express = require("express")
var app = express()
var utils = require("./module/utils")
var Setting = require("./module/config")
var setting = new Setting("setting.json", app, express)
var db = setting.Database

require('./CRUD/delete')(app, db, utils)
require('./CRUD/get')(app, db, utils)
require('./CRUD/post')(app, db, utils)
require('./CRUD/update')(app, db, utils)

app.listen(setting.port)
