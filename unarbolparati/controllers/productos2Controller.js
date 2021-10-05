const db = require('../database/models');

const path = require('path');
const { v4: getId} = require('uuid');
getId();

const { validationResult } = require('express-validator');

const productos2Controller = {
    // formulario para crear producto
    crear: (req, res) => {
        res.render('products/addProduct');
    },

    // formulario para editar producto
    editar: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(function(productToEdit){
                res.render('products/editProduct', {productToEdit: productToEdit});
            });
    },

    // formulario para guardar cambios de edición
    guardarCambios: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()){
            db.Product.update({
                nombre: req.body.nombre,
                nombre_cientifico: req.body.nombre_cientifico,
                region: req.body.region,
                tipo: req.body.tipo,
                altura: req.body.altura,
                crecimiento: req.body.crecimiento,
                riego: req.body.riego,
                suelo: req.body.suelo,
                clima: req.body.clima,
                luz: req.body.luz,
                fruto: req.body.fruto,
                imagen1: '/img/products/' + req.files.imagen1[0].filename,
                imagen2: '/img/products/' + req.files.imagen2[0].filename,
                precio: req.body.precio
            }, {
                where: {id_product: req.params.id}
            })
    
            .then(function(){
                res.redirect('../../productDetail/'+req.params.id);
            })
        } else {
            db.Product.findOne({
                where: {id_product: req.params.id}
            })
            .then(function(productToEdit){
                res.render('products/editProduct', {errors: errors.mapped(), old: req.body, productToEdit: productToEdit});
            })
        }
    },

    // formulario para almacenar producto nuevo
    almacenar: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Product.create({
                nombre: req.body.nombre,
                nombre_cientifico: req.body.nombre_cientifico,
                region: req.body.region,
                tipo: req.body.tipo,
                altura: req.body.altura,
                crecimiento: req.body.crecimiento,
                riego: req.body.riego,
                suelo: req.body.suelo,
                clima: req.body.clima,
                luz: req.body.luz,
                fruto: req.body.fruto,
                imagen1: '/img/products/' + req.files.imagen1[0].filename,
                imagen2: '/img/products/' + req.files.imagen2[0].filename,
                precio: req.body.precio,
                id_product: getId()
            });
            res.redirect('/listProd');
        } else {
            res.render('products/addProduct', { errors: errors.mapped(), old: req.body});
        }

    },

    borrar: (req, res) => {
        db.Product.destroy({ where: {
            id_product: req.params.id
        }});
        res.redirect('/listProd');
    }
}


module.exports = productos2Controller;