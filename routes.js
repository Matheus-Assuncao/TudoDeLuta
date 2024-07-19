const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const atletasController = require('./controllers/atletasController');

//Rota da HomePage
route.get('/',homeController.controller);

//Rota Página de atletas
route.get('/atletas/',atletasController.controller);


//Declarando o modulo com as rotas
module.exports = route;