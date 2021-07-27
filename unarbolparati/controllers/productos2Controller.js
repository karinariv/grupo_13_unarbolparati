const fs = require('fs');
const path = require('path');
const { v4: getId} = require('uuid');
getId();

const productosFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const productos2Controller = {
    // formulario para crear producto
    crear: (req, res) => {
        res.render('products/addProduct');
    },

    // formulario para editar producto
    editar: (req, res) => {
        let idProduct = req.params.id;
        let productToEdit = productos[idProduct];
        res.render('products/editProduct', {productToEdit} );
    },

    // formulario para almacenar producto nuevo
    almacenar: (req, res) => {

        let nuevoArbol = {
            nombre: req.body.nombre,
            nombre_cientifico: req.body.nombre_cientifico,
            region: req.body.region,
            tipo: req.body.tipo,
            altura: req.body.altura,
            crecimiento: req.body.crecimiento,
            riego: req.body.riego,
            suelo: req.body.suelo,
            clima: req.body.clima,
            luz: req.body.luz,
            fruto: req.body.fruto,
            imagen1: '/img/' + req.file.filename,
            precio: req.body.precio,
            id: getId()
        };

        productos.push(nuevoArbol);

        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
        res.redirect('/listProd');
    },

    borrar: (req, res) => {
        let resultadoJson = productos.filter((elementos) => {
            return (elementos.id != req.params.id);
        } );
        fs.writeFileSync(productosFilePath, JSON.stringify(resultadoJson, null, 2));
        res.redirect('/listProd');
    }
}

module.exports = productos2Controller;