const HTTP_STATUS = require("../module/utils.http")
const asyncLib=require("async")

module.exports = function (app,utils,models,uploads) {

    app.put("/user/:id",utils.allowAccess(), (req, res) => {
        var obj={result:req.body}
        var id=req.params.id
        models.User.update(obj.result,{where:{id:id}})
        .then(()=>{utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)})
        .catch(()=>{utils.sendError(res)})
    })

    app.put("/user/photo/:id",utils.allowAccess() ,uploads.single('photo'),(req, res) => {
        var obj={result:{}}
        var fs=require('fs')
        var file=req.file
        var path=file.destination+'/'+Date.now()+file.originalname
        fs.renameSync(file.path,path)
        var obj={result:req.body}
        var id=req.params.id
        asyncLib.waterfall([
            function(next){
                models.User.findOne({
                    attributes:["photo"],
                    where:{id:id}})
                .then((data)=>{
                    if(!data){
                        fs.unlinkSync(path)
                        utils.sendError(res,HTTP_STATUS.NOT_FOUND)
                    }else next(null,data)
                }).catch(()=>{
                    fs.unlinkSync(path)
                    utils.sendError(res)
                })
            },
            function(data){
                models.User.update({photo:path},{where:{id:id}})
                .then(()=>{
                    if(fs.existsSync(data.photo))fs.unlinkSync(data.photo)
                    utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
                })
                .catch(()=>{
                    fs.unlinkSync(path)
                    utils.sendError(res)
                })
            } 
        ])
    })

    app.put("/user/password/:id", utils.allowAccess(),(req, res) => {
        var obj={result:{}}
        var id=req.params.id
        asyncLib.waterfall([
            function(next){
                models.User.findOne({attributes:["password"],where:{id:id}})
                .then((data)=>{
                    if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
                    else{
                        if(utils.verify(data.password,req.body.oldpassword))next(null)
                        else utils.sendError(res,HTTP_STATUS.NOT_ACCEPTABLE)
                    }
                })
                .catch(()=>{utils.sendError(res)})
            },
            function(){
                models.User.update({password:utils.encrypt(req.body.password)},{where:{id:id}})
                .then(()=>{utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)})
                .catch(()=>{utils.sendError(res)})
            }
        ])
    })

    app.put("/task/:id",utils.allowAccess(), (req, res) => {
        var obj={result:req.body}
        var id=req.params.id
        models.Task.update(obj.result,{where:{id:id}})
        .then(()=>{utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)})
        .catch(()=>{utils.sendError(res)})
    })

    app.put("/task/reverse/:id",utils.allowAccess(), (req, res) => {
        var obj={result:req.body}
        var id=req.params.id
        models.Task.findOne({attributes:['is_done'],where:{id:id}})
        .then((data)=>{
            models.Task.update({is_done:!data.is_done},{where:{id:id}})
            .then(()=>{utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)})
            .catch(()=>{utils.sendError(res)})
        }).catch(()=>{utils.sendError(res)})
        
    })
    
}   