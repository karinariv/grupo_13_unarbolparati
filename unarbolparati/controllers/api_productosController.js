const db = require('../database/models');
const { v4: getId} = require('uuid');
const Op = db.Sequelize.Op;
getId();

const api_productosController = {

    showAll: (req, res) => {
        db.Product
            .findAll()
            .then(function(list){
                return res.status(200).json({
                    totalProducts: list.length,
                    data: list,
                    status: 200
                });
            })
    },

    showOne: (req, res) => {
        db.Product
            .findByPk(req.params.id)
            .then((product) => {
                return res.json({
                    data: product,
                    status: 200
                });
            })
    },


    store: (req, res) => {
            db.Product
                .create(req.body)
                .then((product) => {
                    return res.status(200).json({
                        data: product,
                        status: 200
                    })
                });
    },

    update: (req, res) => {
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
                precio: req.body.precio,
                /* imagen1: '/img/products/' + req.files.imagen1[0].filename,
                imagen2: '/img/products/' + req.files.imagen2[0].filename */
            }, { where: {
                id_product: req.params.id
            }}
            )
            .then(() => {
                return res.status(200).json({
                    status: 200,
                    info: "The product was updated"
                })
            })
            .catch((error) => { console.log('There was an error '+ error); });
    },

    delete: (req, res) => {
        db.Product
            .destroy({ where:
                {id_product: req.params.id}
            })
            .then(() => {
                return res.json('This product has been deleted');
            });
    },

    search: (req, res) => {
        db.Product
            .findAll({
                where: {
                    nombre: {[Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(users => {
                return res.status(200).json(users);
            })
            .catch((error) =>  {console.log(error); });
    }
}


module.exports = api_productosController;