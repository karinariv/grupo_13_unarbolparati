const express = require('express');
const router = express.Router();
// Aća nos falta traer el controller
const mainController = require('../controllers/mainController');
<<<<<<< HEAD
const listProdController = require('../controllers/listProdController');

=======
const prodDetailController = require('../controllers/prodDetailController');
>>>>>>> e43aea38cfc6c3a60b27bcc4a2c7c9ae88db21a0
// Acá definimos las rutas
router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail/:id', prodDetailController.productDetail);

router.get('/register', mainController.register);

router.get('/addProduct', mainController.addProduct);

router.get('/panelAdmin', mainController.panelAdmin);

router.get('/editProduct', mainController.editProduct);

router.get('/listProd', listProdController.listProd);

// Acá exportamos el resultado
module.exports = router;