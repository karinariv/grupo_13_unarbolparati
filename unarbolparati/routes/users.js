const express = require('express');
const router = express.Router();
// para usar express-validator en sección de rutas
const { body } = require('express-validator');
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

//validaciones para el login
const validateLogin = [
    body('correo').isEmail().withMessage('Debes anotar tu correo con el que te registraste'),
    body('password').notEmpty().withMessage('Debes anotar tu contraseña')
];

// rutas para crear usuario
router.get('/crearUsuario', usersController.crear);
router.post('/crearUsuario', upload.single('imagenUsuario'), usersController.almacenar);

//para el login
router.get('/', usersController.login);
router.post('/', validateLogin, usersController.procesoLogin);


// esportando el módulo router
module.exports = router;