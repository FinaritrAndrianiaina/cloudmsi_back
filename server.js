var express = require("express")
var app = express()
var utils = require("./module/utils")
var Setting = require("./module/config")
var setting = new Setting("setting.json", app, express)
var db = setting.Database
var models=require("./models")
var multer=require("multer")
var uploads=multer({dest:'uploads'})

console.log(process.env.NODE_ENV)

require('./CRUD/delete')(app, utils,models,uploads)
require('./CRUD/get')(app, utils,models,uploads)
require('./CRUD/post')(app, utils,models,uploads)
require('./CRUD/update')(app, utils,models,uploads)

app.listen(process.env.PORT || setting.port)
