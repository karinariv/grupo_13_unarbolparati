const dataArboles = require('../data/products.json');

const controlador = {
    index: (req, res) => {
        res.render('index', {dataArboles: dataArboles});
    },
    productCart: (req, res) => {
        res.render('productCart', {dataArboles: dataArboles});
    },
    register: (req, res) => {
        res.render('./users/register');
    },
    addProduct: (req, res) => {
        res.render('./products/addProduct');
    },
    panelAdmin: (req, res) => {
        res.render('./products/panelAdmin');
    },
    editProduct: (req, res) => {
        res.render('./products/editProduct');
    }
}
// Acá exportamos el resultado
module.exports = controlador;