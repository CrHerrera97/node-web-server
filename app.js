require('dotenv').config()
const express = require('express')
const hbs = require('hbs')


const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//middleware -> funcion
app.use(express.static('public'))

function getOpcion (){
    return {
        nombre: 'Cristian',
        titulo: 'Node Page!'
    }
}

app.get('/', function (req, res) {
    let opcion = getOpcion()
    res.render('home',opcion)
})

app.get('/generic', function (req, res) {
    let opcion = getOpcion()
    res.render('generic',opcion)
})

app.get('/elements',function (req,res){
    let opcion = getOpcion()
    res.render('elements',opcion)
})

/*
app.get('/generic', function (req, res) {
    res.sendfile(__dirname + '/public/generic.html')
})*/

app.get('/home', function (req, res) {
    res.sendfile(__dirname + '/public/index.html')
})

/*
app.get('/elements', function (req, res) {
    res.sendfile(__dirname + '/public/elements.html')
})
*/

app.get('*', function (req, res) {
    res.sendfile(__dirname + '/public/404.html')
})  

app.get('/shop', function (req, res) {
    res.send('Shop Page')
    })
    
app.listen(port)