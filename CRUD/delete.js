module.exports = function (app, db, utils, asyncLib, bcrypt) {
    app.delete("/", (req, res) => {
        res.send("Connected")
    })
}   