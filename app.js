require('dotenv').config();
const express = require('express')
const app = express();

const port = 8081; //process.env.PORT;
const hbs = require('hbs');

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')
//servir contenio estatico
app.use(express.static('public'));

const info = {
    nombre:'David Calapaqui',
    titulo: 'PRÁCTICA DOCKER'
}

app.get('/', function(req, res) {
    res.render('home',info);
})
app.get('/generic', function(req, res) {
    res.render('generic',info);
})

app.get('/elements', function(req, res) {
    res.render('elements',info);
})



app.listen(port, ()=>{
    console.log('Escuchando en el puerto', port);
})