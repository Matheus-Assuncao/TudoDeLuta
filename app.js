const express = require('express');
const app = express();
const path = require('path');

//Configurando arquivos estáticos
app.use(express.static(path.resolve(__dirname, 'assets')));
app.use('/assets/js',express.static(path.resolve(__dirname, 'assets/js')))

//Usando EJS
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//Rotas
const routes = require('./routes');
app.use(routes);

//Usando porta teste
app.listen(8080)
console.log('Usando porta 8080')