const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');

const path = require('path');

/* Para poder usar el PUT y DELETE*/
const methodOverride = require('method-override');

app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3030, () => {
    console.log("Servidor listo en puerto 3030");
});

app.use('/', mainRouter);

app.use('/login', mainRouter);

app.use('/productCart', mainRouter);

app.use('/productDetail', mainRouter);

app.use('/register', mainRouter);

app.use('/addProduct', mainRouter);

app.use('/panelAdmin', mainRouter);

app.use('/editProduct', mainRouter);

app.use('/listProd', mainRouter);

/* Para poder usar el POST y json*/
app.use(express.urlencoder({extended:false}));
app.use(express.json());

/* Para poder usar el PUT y DELETE*/
app.use(methodOverride('_method'));

