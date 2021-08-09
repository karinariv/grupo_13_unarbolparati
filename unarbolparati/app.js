const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRouter');
const rutasProductos = require('./routes/productos');
const rutasUsuarios = require('./routes/users')


const path = require('path');

/* Para poder usar el PUT y DELETE*/
const methodOverride = require('method-override');

/* Para poder usar el PUT y DELETE*/
app.use(methodOverride('_method'));

app.set("view engine", "ejs");

app.use(express.static('public'));

app.listen(3030, () => {
    console.log("Servidor listo en puerto 3030");
});

/* Para poder usar el POST y json*/
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', mainRouter);

app.use('/login', mainRouter);

app.use('/productCart', mainRouter);

app.use('/productDetail', mainRouter);

app.use('/register', mainRouter);

app.use('/addProduct', mainRouter);

app.use('/panelAdmin', mainRouter);

app.use('/editProduct', mainRouter);

app.use('/listProd', mainRouter);

app.use('/productos',rutasProductos); //nuevo recurso especificado en routes prouctos.js

app.use('/users', rutasUsuarios);





app.get('/yoyo/:algo?', (req, res) => {
    res.send("This is a Detail " + req.params.algo);
});


/* Kari*/









/* Dani */









