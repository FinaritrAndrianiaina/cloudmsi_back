module.exports = function (app, utils,models) {
    app.put("/", (req, res) => {
        res.send("Connected")
    })
}   