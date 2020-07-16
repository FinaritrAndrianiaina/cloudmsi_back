const HTTP_STATUS = require("../module/utils.http")
const asyncLib=require("async")
const fs=require('fs')

module.exports = function (app, utils,models) {

    app.delete("/user/:id", (req, res) => {
        if(utils.verifyHeaders(req.headers)){
            models.User.destroy({where:{id:req.params.id}})
            .then(()=>{utils.sendSuccess(res,{},HTTP_STATUS.ACCEPTED)})
            .catch(()=>{utils.sendError(res)})
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })

    app.delete("/file/:id", (req, res) => {
        if(utils.verifyHeaders(req.headers)){
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
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })

    app.delete("/user/file/:id", (req, res) => {
        if(utils.verifyHeaders(req.headers)){

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
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })
}   