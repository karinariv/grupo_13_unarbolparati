const express = require('express');
const router = express.Router();
// Aća nos falta traer el controller
const mainController = require('../controllers/mainController');
// Acá definimos las rutas
router.get('/', mainController.index);

router.get('/login', mainController.login);

router.get('/productCart', mainController.productCart);

router.get('/productDetail', mainController.productDetail)

router.get('/register', mainController.register);

router.get('/addProduct', mainController.addProduct);

router.get('/panelAdmin', mainController.panelAdmin);

// Acá exportamos el resultado
module.exports = router;