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
        res.render('products/editProduct', {productToEdit, idProduct} ); 
    },

    // formulario para guardar cambios de edición
    guardarCambios: (req, res) => {
        let idProduct = req.params.id;
        let productosEdit = productos;
        productosEdit[idProduct].nombre = req.body.nombre;
        productosEdit[idProduct].nombre_cientifico = req.body.nombre_cientifico;
        productosEdit[idProduct].region = req.body.region;
        productosEdit[idProduct].tipo = req.body.tipo;
        productosEdit[idProduct].altura = req.body.altura;
        productosEdit[idProduct].crecimiento = req.body.crecimiento;
        productosEdit[idProduct].riego = req.body.riego;
        productosEdit[idProduct].suelo = req.body.suelo;
        productosEdit[idProduct].clima = req.body.clima;
        productosEdit[idProduct].luz = req.body.luz;
        productosEdit[idProduct].fruto = req.body.fruto;
        productosEdit[idProduct].precio = req.body.precio;
        console.log(productosEdit);
        console.log(req.body.nombre);
        //console.log(productToEdit.nombre_cientifico);
        fs.writeFileSync(productosFilePath, JSON.stringify(productosEdit, null, 2));
        //res.send('Hello is there anybody in there ' + idProduct +' edición: ' + JSON.stringify(req.body));
        return res.redirect('/productDetail/' + productosEdit[idProduct].id);
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
            imagen1: '/img/products/' + req.files.imagen1[0].filename,
            imagen2: '/img/products/' + req.files.imagen2[0].filename,
            precio: req.body.precio,
            id: getId()
        };

        productos.push(nuevoArbol);

        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
        res.redirect('/listProd');

        //console.log(req.files.imagen1[0].filename);
        //console.log(req.files.imagen2[0].filename);
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