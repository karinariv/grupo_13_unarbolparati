const express = require('express');
const router = express.Router();
// Aća nos falta traer el controller
const mainController = require('../controllers/mainController');
const listProdController = require('../controllers/listProdController');

// Acá definimos las rutas
router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail', mainController.productDetail)

router.get('/register', mainController.register);

router.get('/addProduct', mainController.addProduct);

router.get('/panelAdmin', mainController.panelAdmin);

router.get('/editProduct', mainController.editProduct);

router.get('/listProd', listProdController.listProd);

// Acá exportamos el resultado
module.exports = router;