module.exports = function (app, utils,models) {
    app.delete("/", (req, res) => {
        res.send("Connected")
    })
}   