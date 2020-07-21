const HTTP_STATUS = require("../module/utils.http");

module.exports = function (app, utils,models) {

    app.get('/',(req, res) => {
        res.render("index.ejs");
    });

    app.get("/user", utils.allowAccess(),(req, res) => {
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
    })

    app.get("/user/file/:id",utils.allowAccess() ,(req, res) => {
        var obj={result:{}}
        models.File.findAll({where:{id_user:req.params.id}})
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj)
        }).catch((err)=>{utils.sendError(res)})
    })

    app.get("/user/:id",utils.allowAccess(), (req, res) => {
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
    })

    app.get("/user/project/:id",utils.allowAccess() ,(req, res) => {
        var obj={result:{}}
        models.Project.findAll({where:{id_user:req.params.id}})
        .then((data)=>{
            var links=[]
            for(let i=0;i<data.length;i++)
               links.push({url:"https://api.github.com/repos/"+data[i].git_username+"/"+data[i].name})
            obj.result=links
            utils.sendSuccess(res,obj)
        }).catch((err)=>{utils.sendError(res)})
    })

    app.get("/file",utils.allowAccess(),(req,res)=>{
        var obj={result:{}}
        models.File.findAll()
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
        }).catch((err)=>{utils.sendError(res)})
    })

    app.get("/file/:id",utils.allowAccess(),(req,res)=>{
        var obj={result:{}}
        models.File.findOne({where:{id:req.params.id}})
        .then((data)=>{
            if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
            else{
                obj.result=data
                utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
            }
        }).catch((err)=>{utils.sendError(res,HTTP_STATUS.FORBIDDEN)})
    })

    app.get("/project/:id",utils.allowAccess(), (req, res) => {
        var obj={result:{}}
        models.Project.findOne({where:{id:req.params.id}})
        .then((data)=>{
                if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
                else{
                    var link={url:"https://api.github.com/repos/"+data.git_username+"/"+data.name}
                    obj.result=link
                    utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
                }
        })
        .catch(()=>{utils.sendError(res)})
    })

    app.get("/project/task/:id",utils.allowAccess(), (req, res) => {
        var obj={result:{}}
        models.Task.findAll({where:{id_project:req.params.id}})
        .then((data)=>{
                if(!data)utils.sendError(res,HTTP_STATUS.NOT_FOUND)
                else{
                    obj.result=data
                    utils.sendSuccess(res,obj,HTTP_STATUS.ACCEPTED)
                }
        })
        .catch(()=>{utils.sendError(res)})
    })

}   