const express = require('express');
const route = express.Router();

//Rota da HomePage
route.get('/',(req,res)=>{
    res.render('index')
});

//Rota Página de atletas
route.get('/atletas/',(req,res)=>{
    res.render('atletas')
});

//Rota Página Olimpídas
route.get('/olimpiadas/',(req,res)=>{
    res.render('olimpiadas')
});

//Rota leandro Lo
route.get('/leandroLo/',(req,res) =>{
    res.render('leandroLo')
})

//Declarando o modulo com as rotas
module.exports = route;