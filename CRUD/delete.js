const HTTP_STATUS = require("../module/utils.http")
const asyncLib=require("async")
const fs=require('fs')

module.exports = function (app, utils,models) {

    app.delete("/user/:id",utils.allowAccess(), (req, res) => {
        models.User.destroy({where:{id:req.params.id}})
        .then(()=>{utils.sendSuccess(res,{},HTTP_STATUS.ACCEPTED)})
        .catch(()=>{utils.sendError(res)})
    })

    app.delete("/user/project/:id",utils.allowAccess(), (req, res) => {
        models.Project.destroy({where:{idUser:req.params.id}})
        .then(()=>{utils.sendSuccess(res,{},HTTP_STATUS.ACCEPTED)})
        .catch(()=>{utils.sendError(res)})
    })

    app.delete("/file/:id",utils.allowAccess(), (req, res) => {
        asyncLib.waterfall([
            function(next){
                models.File.findOne({where:{id:req.params.id}})
                .then((data)=>{
                    if(fs.existsSync(data.path))
                        fs.unlinkSync(data.path)
                    next(null)
                })
            },
            function(){
                models.File.destroy({where:{id:req.params.id}})
                .then(()=>{utils.sendSuccess(res,{},HTTP_STATUS.ACCEPTED)})
                .catch(()=>{utils.sendError(res)})
            }
        ])
    })

    app.delete("/user/file/:id",utils.allowAccess(), (req, res) => {
        asyncLib.waterfall([
            function(next){
                models.File.findAll({where:{id_user:req.params.id}})
                .then((data)=>{
                for(let i=0;i<data.length;i++){
                    if(fs.existsSync(data[i].path))
                        fs.unlinkSync(data[i].path)
                    }
                    next(null)
                })
            },
            function(){
                models.File.destroy({where:{id_user:req.params.id}})
                .then(()=>{utils.sendSuccess(res,{},HTTP_STATUS.ACCEPTED)})
                .catch(()=>{utils.sendError(res)})
            }
        ])
    })

    app.delete("/project/:id",utils.allowAccess(), (req, res) => {
        models.Project.destroy({where:{id:req.params.id}})
        .then(()=>{utils.sendSuccess(res,{},HTTP_STATUS.ACCEPTED)})
        .catch(()=>{utils.sendError(res)})
    })
}   