module.exports = function (app, db, utils, asyncLib, bcrypt) {
    app.get("/", (req, res) => {
        res.send("Connected")
    })
}   