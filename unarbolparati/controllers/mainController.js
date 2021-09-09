// const dataArboles = require('../data/products.json');
const db = require('../database/models');

const controlador = {
    index: (req, res) => {
        db.Product.findAll()
            .then(function(dataArboles){
                res.render('index', {dataArboles: dataArboles});
            });
        
    },
    productCart: (req, res) => {
        res.render('productCart');
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