// Tsy mandeha faty le intellisens ra tsy asina an'io.
const HTTP_STATUS = require('../module/utils.http')
const { verify } = require('crypto')

module.exports = function (app, utils,models,uploads) {

    app.post("/user", (req, res) => {
        var obj={result:req.body}
        obj.result.password=utils.encrypt(obj.result.password)
        models.User.create(obj.result)
        .then((data)=>{
            obj.result.password=null
            utils.sendSuccess(res,obj,HTTP_STATUS.CREATED)
        })
        .catch((err)=>{
            if(err.original.code=='23505')utils.sendError(res,HTTP_STATUS.CONFLICT)
            else utils.sendError(res)
        })
    })

    app.post('/user/token',(req,res)=>{
        var obj={result:{}}
        models.User.findOne({
            where:{
                username:req.body.username
            },
            attributes:[
                "password",
                "email",
                "username",
                "id"
        ]})
        .then((data)=>{
            if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
            else{
                if(utils.verify(data.password,req.body.password)){
                    obj.token=utils.signToken({
                        username:data.username,
                        id:data.id,
                        email:data.email
                    })
                    utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
                }else utils.sendError(res,HTTP_STATUS.NOT_ACCEPTABLE)
            }
        })
        .catch((err)=>{utils.sendError(res)})
    })

    app.post("/file",utils.allowAccess(),uploads.single('file'),(req, res) => {
        var obj={result:{}}
        var fs=require('fs')
        var file=req.file
        var path=file.destination+'/'+Date.now()+file.originalname
        fs.renameSync(file.path,path)
        obj.result={
            name:file.originalname,
            path:path,
            id_user:req.body.id_user,
            type:file.mimetype,
            size:file.size
        }
        models.File.create(obj.result)
        .then(()=>{
            utils.sendSuccess(res,obj,HTTP_STATUS.CREATED)
        })
        .catch(()=>{
            fs.unlinkSync(path)
            utils.sendError(res)
        })
    })

    app.post("/project",utils.allowAccess(),(req,res)=>{
        var obj={result:req.body}
        var link="https://api.github.com/repos/"+req.body.git_username+"/"+req.body.name
        require("axios").get(link)
        .then(()=>{
            models.Project.create(req.body)
            .then(()=>{utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)})
            .catch(()=>{utils.sendError(res)})
        })
        .catch(()=>{utils.sendError(res,HTTP_STATUS.NOT_FOUND)})
    })

    app.post("/task",utils.allowAccess(),(req,res)=>{
        var obj={result:req.body}
        obj.result.is_done=false
        models.Task.create(obj.result)
        .then(()=>{utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)})
        .catch(()=>{utils.sendError(res)})
    })
    
}