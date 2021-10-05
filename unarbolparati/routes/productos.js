const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const listProdController = require('../controllers/listProdController');
const { body } = require('express-validator');

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

const validations = [
    body('nombre')
        .notEmpty().withMessage('Debes ingresar el nombre del producto').bail()
        .isLength({min:5}).withMessage("El nombre debe tener al menos 5 caracteres"),
    body('precio').notEmpty().withMessage('Debes ingresar el precio del producto'),
    body('nombre_cientifico').notEmpty().withMessage('El nombre científico es necesario'),
    body('region').notEmpty().withMessage('Especifica la región'),
    body('tipo').notEmpty().withMessage('Añade el tipo'),
    body('altura').notEmpty().withMessage('Especifica la altura'),
    body('crecimiento').notEmpty().withMessage('Indica su crecimiento'),
    body('riego').notEmpty().withMessage('Añade el tipo de riego'),
    body('suelo').notEmpty().withMessage('Especifíca el tipo de suelo'),
    body('clima').notEmpty().withMessage('Indica el clima necesario'),
    body('luz').notEmpty().withMessage('Indica la cantidad de luz'),
    body('fruto').notEmpty().withMessage('Especifica el tipo de fruto'),
    body('imagen1').custom((value, {req}) => {
        let file = req.files.imagen1;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file) {
            throw new Error('Elige la imagen 1');
        } else {
            let files = req.files.imagen1[0];
            let fileExtension = path.extname(files.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error("Las extensiones aceptadas son .jpg, .jpeg, .png y .gif");
            }
        }
        return true;
    }),
    body('imagen2').custom((value, {req}) => {
        let file = req.files.imagen2;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file) {
            throw new Error('Elige la imagen 2');
        } else {
            let files = req.files.imagen2[0];
            let fileExtension = path.extname(files.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error("Las extensiones aceptadas son .jpg, .jpeg, .png y .gif");
            }
        }
        return true;
    }),
];


// crear producto
router.get('/crear', productos2Controller.crear);
router.post('/crear', [uploadMultiple, validations], productos2Controller.almacenar);

// editar producto
router.get('/editar/:id', productos2Controller.editar);
router.put('/editar/:id', [uploadMultiple, validations], productos2Controller.guardarCambios);

// borrar producto
router.delete('/productDetail/:id', productos2Controller.borrar);





/* Dani */








module.exports = router;