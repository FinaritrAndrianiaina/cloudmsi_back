module.exports = function (app, db, utils) {
    app.get("/", (req, res) => {
        res.send("Connected")
    })
}   