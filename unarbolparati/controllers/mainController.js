const controlador = {
    index: (req, res) => {
        return res.render('index');
    },
    login: (req, res) => {
        return res.render('login');
    },
    productCart: (req, res) => {
        return res.render('productCart');
    },
    productDetail: (req, res) => {
        return res.render('productDetail');
    },
    register: (req, res) => {
        return res.render('register');
    }
}
// Acá exportamos el resultado
module.exports = controlador;