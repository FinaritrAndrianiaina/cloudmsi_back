const HTTP_STATUS = require("../module/utils.http");

module.exports = function (app, utils,models) {

    app.get('/', (req, res) => {
        res.render("index.ejs");
    });

    app.get("/user", (req, res) => {
        if(utils.verifyHeaders(req.headers)){
            var obj={result:{}}
            models.User.findAll({
                attributes:[
                    "id",
                    "username",
                    "email",
                    "firstname",
                    "lastname",
                    "createdAt",
                    "updatedAt",
                    "photo"
                ]
            })
            .then((data)=>{
                obj.result=data
                utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
            }).catch((err)=>{utils.sendError(res)})
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })

    app.get("/user/file/:id", (req, res) => {
        if(utils.verifyHeaders(req.headers)){
            var obj={result:{}}
            models.File.findAll({where:{id_user:req.params.id}})
            .then((data)=>{
                obj.result=data
                utils.sendSuccess(res,obj)
            }).catch((err)=>{utils.sendError(res)})
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })

    app.get("/user/:id", (req, res) => {
        if(utils.verifyHeaders(req.headers)){
            var obj={result:{}}
            models.User.findOne({
                where:{id:req.params.id},
                attributes:[
                    "id",
                    "username",
                    "email",
                    "firstname",
                    "lastname",
                    "createdAt",
                    "updatedAt",
                    "photo"
                ]
            })
            .then((data)=>{
                if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
                else{
                    obj.result=data
                    utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
                }
            })
            .catch(()=>{utils.sendError(res)})
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })

    app.get("/file",(req,res)=>{
        if(utils.verifyHeaders(req.headers)){
            var obj={result:{}}
            models.File.findAll()
            .then((data)=>{
                obj.result=data
                utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
            }).catch((err)=>{utils.sendError(res)})
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })

    app.get("/file/:id",(req,res)=>{
        if(utils.verifyHeaders(req.headers)){
            var obj={result:{}}
            models.File.findOne({where:{id:req.params.id}})
            .then((data)=>{
                if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
                else{
                    obj.result=data
                    utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
                }
            }).catch((err)=>{utils.sendError(res,HTTP_STATUS.FORBIDDEN)})
        }else utils.sendError(res,HTTP_STATUS.UNAUTHORIZED)
    })
    
}   