
module.exports = function (app, utils,models) {

    app.get('/', (req, res) => {
        res.render("index.ejs");
    });

    app.get("/user", (req, res) => {
        var obj={result:{}}
        models.User.findAll()
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj)
        }).catch((err)=>{
            utils.sendError(res)
        })
    })

    app.get("/user/file/:id", (req, res) => {
        var obj={result:{}}
        models.File.findAll({where:{id_user:req.params.id}})
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj)
        }).catch((err)=>{
            utils.sendError(res)
        })
    })

    app.get("/user/:id", (req, res) => {
        var obj={result:{}}
        models.User.findOne({where:{id:req.params.id}})
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj)
        })
        .catch(()=>{
            utils.sendError(res)
        })
    })

    app.get("/file",(req,res)=>{
        var obj={result:{}}
        models.File.findAll()
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj)
        }).catch((err)=>{
            console.log(err)
            utils.sendError(res)
        })
    })

    app.get("/file/:id",(req,res)=>{
        var obj={result:{}}
        models.File.findOne({where:{id:req.params.id}})
        .then((data)=>{
            obj.result=data
            utils.sendSuccess(res,obj)
        }).catch((err)=>{
            utils.sendError(res)
        })
    })
    
}   