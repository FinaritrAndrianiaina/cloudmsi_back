module.exports = function (app, db, utils) {
    app.put("/", (req, res) => {
        res.send("Connected")
    })
}   