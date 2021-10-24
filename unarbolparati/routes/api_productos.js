const express = require('express');
const router = express.Router();
const api_productosController = require('../controllers/api_productosController');

// Get all products
router.get('/showAll', api_productosController.showAll);

// Get product by Id
router.get('/showOne/:id', api_productosController.showOne);

// crear producto
router.post('/create', api_productosController.store);

// editar producto
router.put('/update/:id', api_productosController.update);

// borrar producto
router.delete('/delete/:id', api_productosController.delete);

// Search
router.get('/search', api_productosController.search);

module.exports = router;