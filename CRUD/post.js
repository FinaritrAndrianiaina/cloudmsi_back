module.exports = function (app, utils,models,uploads) {

    app.post("/user", (req, res) => {
        var obj={result:req.body}
        models.User.create(obj.result)
        .then((data)=>{
            utils.sendSuccess(res,obj)
        })
        .catch((err)=>{
            console.log(err)
            utils.sendError(res)
        })
    })

    app.post("/file",uploads.single('file'), (req, res) => {
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
            utils.sendSuccess(res,obj)
        })
        .catch(()=>{
            utils.sendError(res)
        })

    })
    
}   