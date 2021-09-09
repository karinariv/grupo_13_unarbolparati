const db = require('../database/models');
// const path = require('path');

/* Aquí importamos el JSON de listaProductos*/

//const fs = require('fs');
//let listProd = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8');

//listProd = JSON.parse(listProd);
//console.log(listProd.length);


// Acá nos falta un objeto literal con las acciones para cada ruta

const lPcontrolador = {
    listProd: (req, res) => {
        // let id = req.params.id;
        db.Product.findAll()
            .then(function(listProd){
                res.render('./products/listProd', {listProd: listProd});
            });

        // return res.render('./products/listProd', {listProd});
    },
    /* simplyProducts: (req, res) => {
        res.render('./products/productos', {listProd});
    } */
}
// Acá exportamos el resultado
module.exports = lPcontrolador;




