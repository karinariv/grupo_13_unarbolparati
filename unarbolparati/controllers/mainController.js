const controlador = {
    index: (req, res) => {
        return res.render('index');
    },
    login: (req, res) => {
        return res.render('./users/login');
    },
    productCart: (req, res) => {
        return res.render('productCart');
    },
    productDetail: (req, res) => {
        return res.render('./products/productDetail');
    },
    register: (req, res) => {
        return res.render('./users/register');
    }
}
// Acá exportamos el resultado
module.exports = controlador;