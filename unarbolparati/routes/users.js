const express = require('express');
const router = express.Router();
//importando middleware de usuario
const usersMiddleware = require('../middlewares/usersMiddleware');
// para usar express-validator en sección de rutas
const { body } = require('express-validator');
const path = require('path');
const multer = require('multer');
const usersController = require('../controllers/usersController');
const session = require('express-session');

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
    body('email').notEmpty().withMessage('Debes anotar tu correo con el que te registraste').isEmail().withMessage('Debes anotar un email válido'),
    body('password').notEmpty().withMessage('Debes anotar tu contraseña')
];


//validaciones para crear usuario
const validateSignup = [
    body('email').isEmail().withMessage('Debes anotar un email válido'),
    body('password').notEmpty().withMessage('Debes anotar una contraseña')
];

// rutas para crear usuario
router.get('/crearUsuario', usersController.crear);
router.post('/crearUsuario', [validateSignup, upload.single('imagenUsuario')], usersController.almacenar);

//para el login
router.get('/', usersMiddleware, usersController.login);
router.post('/', validateLogin, usersController.procesoLogin);

//para la bienvenida
router.get('/welcome', usersController.welcome);

//para cerrar la sesión
router.get('/cerrar', usersController.cerrarSesion);


// esportando el módulo router
module.exports = router;