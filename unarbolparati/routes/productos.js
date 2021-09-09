const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const listProdController = require('../controllers/listProdController');

//router.get('/', listProdController.simplyProducts);

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle del producto ' + req.params.id )
})

/* Kari*/

const productos2Controller = require('../controllers/productos2Controller');

// haciendo uso de multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/products'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + (Date.now()) + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});
const uploadMultiple = upload.fields([{ name: 'imagen1', maxCount: 1}, { name: 'imagen2', maxCount: 1}]);

// crear producto
router.get('/crear', productos2Controller.crear);
router.post('/crear', uploadMultiple, productos2Controller.almacenar);

// editar producto
router.get('/editar/:id', productos2Controller.editar);
router.put('/editar/:id', uploadMultiple, productos2Controller.guardarCambios);

// borrar producto
router.delete('/productDetail/:id', productos2Controller.borrar);





/* Dani */








module.exports = router;