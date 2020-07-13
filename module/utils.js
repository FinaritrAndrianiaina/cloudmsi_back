module.exports = {

    sendError: function (res, code=400, msg="Connexion Error.") {
        res.json({
            status:false,
            msg:msg,
            code:code
        })
    },

    sendSuccess: function (res, obj) {
        obj.status = true
        res.json(obj)
    }
}