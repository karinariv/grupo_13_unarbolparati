// Controlador ProdDetail

const db = require('../database/models');

// const dataArboles = require('../data/products.json');

const prodDetailController = {
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function(listaProductos){
                res.render('./products/productDetail', {listaProductos: listaProductos});
            });
        /* let idProducto = req.params.id;
        for (let listaProductos of dataArboles) {
            if (listaProductos.id == idProducto) {
                res.render('./products/productDetail', {listaProductos: listaProductos});
            }
        } */
    }
}

module.exports = prodDetailController;