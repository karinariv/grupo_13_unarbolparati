const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');

const path = require('path');

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