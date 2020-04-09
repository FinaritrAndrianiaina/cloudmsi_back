module.exports = function (app, db, utils) {
    app.post("/", (req, res) => {
        res.send("Connected")
    })
}   