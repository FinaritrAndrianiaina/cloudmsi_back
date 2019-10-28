express = require('express')
app = new express()

app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index.ejs");
});

app.listen(8080, () => {
    console.log('Connexion au server effectué...');
});

