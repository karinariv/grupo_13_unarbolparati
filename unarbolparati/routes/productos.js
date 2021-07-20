const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

router.get('/', (req,res) => {
    res.send('Productos listados sin detalle solo nombre');
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle del producto ' + req.params.id )
})

/* Kari*/

const productos2Controller = require('../controllers/productos2Controller');

// haciendo uso de multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + (Date.now()) + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

// crear producto
router.get('/crear', productos2Controller.crear);
router.post('/crear', upload.single("imagen"), productos2Controller.almacenar);








/* Dani */








module.exports = router;