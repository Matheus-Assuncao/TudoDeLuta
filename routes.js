const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const atletasController = require('./controllers/atletasController');
const olimpiadasController = require('./controllers/olimpiadasController');

//Rota da HomePage
route.get('/',homeController.controller);

//Rota Página de atletas
route.get('/atletas/',atletasController.controller);

//Rota Página Olimpídas
route.get('/olimpiadas/',olimpiadasController.controller);

//Rota leandro Lo
route.get('/leandroLo/',(req,res) =>{
    res.render('leandroLo')
})

//Declarando o modulo com as rotas
module.exports = route;