const db = require('../database/models');
const Op = db.Sequelize.Op;
module.exports = {
    saludo: (req, res) =>{
        return res.json('Esto solo es una prueba de función de la API');
    },
    list: (req, res) => {
        db.User
            .findAll()
            .then(users => {
                return res.status(200).json({
                    total: users.length,
                    data: users,
                    status: 200,
                })
            } )
    },
    show: (req, res) => {
        db.User
            .findByPk(req.params.id)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200,
                })
            } )
    },
    store: (req, res) => {
        db.User
            .create(req.body)
            .then(user => {
                return res.status(200).json({
                    data: user,
                    status: 200,
                    created: 'ok'
                })
            } )
    },
    delete: (req, res) => {
        db.User
            .destroy({
                where:{
                    id_User: req.params.id
                }
            })
            .then(response => {
                return res.json(response);
            } )
    },
    search: (req, res) => {
        db.User
            .findAll({
                where: {
                    firstName: {[Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(users => {
                return res.status(200).json(users);
            } )
    },
}