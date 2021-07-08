const controlador = {
    index: (req, res) => {
        res.render('index');
    },
    login: (req, res) => {
        res.render('./users/login');
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {
        res.render('./products/productDetail');
    },
    register: (req, res) => {
        res.render('./users/register');
    },
    addProduct: (req, res) => {
        res.render('./products/addProduct');
    }
}
// Acá exportamos el resultado
module.exports = controlador;