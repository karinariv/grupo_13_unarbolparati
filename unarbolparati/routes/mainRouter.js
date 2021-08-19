const express = require('express');
const router = express.Router();
// Importando middleware para huespedes (para productCart)
const huespedesMiddleware = require('../middlewares/huespedesMiddleware');

// Acá nos falta traer el controller
const mainController = require('../controllers/mainController');
const listProdController = require('../controllers/listProdController');

const prodDetailController = require('../controllers/prodDetailController');
// Acá definimos las rutas
router.get('/', mainController.index);


router.get('/productCart', huespedesMiddleware, mainController.productCart);

router.get('/productDetail/:id', prodDetailController.productDetail);

router.get('/register', mainController.register);

router.get('/addProduct', mainController.addProduct);

router.get('/panelAdmin', mainController.panelAdmin);

router.get('/editProduct', mainController.editProduct);

router.get('/listProd', listProdController.listProd);

// Acá exportamos el resultado
module.exports = router;

