module.exports = function (app, db, utils) {
    app.delete("/", (req, res) => {
        res.send("Connected")
    })
}   