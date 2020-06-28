module.exports = {

    renderError: function (res, msg) {
        res.render('index', {
            done: false,
            msg: msg
        })
    },

    renderSucces: function (res, msg) {
        res.render('index', {
            done: true,
            msg: msg
        })
    },

    sendError: function (res, code=400, msg) {
        res.json({
            status:false,
            msg:msg,
            code:code
        })
    },

    sendSuccess: function (res, obj, msg) {
        obj.status = true
        obj.msg = msg
        res.json(obj)
    }
}