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

    sendError: function (res, obj, msg) {
        obj.result = null
        obj.status = false
        obj.msg = msg
        res.json(obj)
    },

    sendSuccess: function (res, obj, msg) {
        obj.status = true
        obj.msg = msg
        res.json(obj)
    }
}