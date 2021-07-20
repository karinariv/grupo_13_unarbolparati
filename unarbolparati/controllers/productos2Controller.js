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
            imagen: req.file.filename,
            precio: req.body.precio,
            id: getId()
        };

        productos.push(nuevoArbol);

        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, 2));
        res.redirect('/listProd');
    }
}

module.exports = productos2Controller;