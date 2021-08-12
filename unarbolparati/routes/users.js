const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const usersController = require('../controllers/usersController')

// Para el uso de multer
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/users'),
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + (Date.now()) + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

// rutas para crear usuario
router.get('/crearUsuario', usersController.crear);
router.post('/crearUsuario', upload.single('imagenUsuario'), usersController.almacenar);

//para el login
router.get('/', usersController.login);


// esportando el módulo router
module.exports = router;