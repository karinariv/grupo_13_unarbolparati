// Controlador ProdDetail

const dataArboles = require('../data/products.json');

const prodDetailController = {
    productDetail: (req, res) => {
        let idProducto = req.params.id;
        for (let listaProductos of dataArboles.listaProductos) {
            if (listaProductos.id == idProducto) {
                res.render('./products/productDetail', {listaProductos: listaProductos});
            }
        }
    }
}

module.exports = prodDetailController;