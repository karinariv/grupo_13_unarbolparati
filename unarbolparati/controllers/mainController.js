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
/*     productDetail: (req, res) => {
        res.render('./products/productDetail');
    }, */
/*     productDetail: (req, res) => {
        let arbol;
        const idProducto = req.params.id;
        for (let arbol of dataArboles.listaProductos) {
                res.render('./products/productDetail', {arbol: arbol[idProducto-1]});
                return arbol;
        }
    }, */
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