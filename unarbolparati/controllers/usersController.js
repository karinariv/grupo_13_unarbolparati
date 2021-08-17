const fs = require('fs');
const path = require('path');
const { v4: getIdUsuario} = require('uuid');
getIdUsuario();
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
//para validator
const { validationResult } = require('express-validator');
const session = require('express-session');

const usersController = {
    crear: (req, res) => {
        res.render('users/usersRegister');
    },

    almacenar: (req, res) => {
        
        let nuevoUsuario = {
            id: getIdUsuario(),
            firstName: req.body.nombre,
            lastName: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            image: '/img/users/' + req.file.filename,
            category: req.body.categoria
        }

        users.push(nuevoUsuario);

        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
        res.send("Usuario registrado satisfactoriamente.")
    },

    login: (req, res) => {
        return res.render('users/login');
    },

    procesoLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let users2;
            if (JSON.stringify(users) =="") {
                users2 = [];
            } else {
                users2 = users;
            }
            let usuarioALoguearse;
            for (let i=0; i < users2.length; i++) {
                if (users2[i].email == req.body.email) {
                    if (bcrypt.compareSync(req.body.password, users2[i].password)) {
                         usuarioALoguearse = users2[i];
                        break;
                    }
                }                
            }
            if (usuarioALoguearse == undefined) {
                return res.render('users/login', {errors: [
                    {msg: 'Credenciales invalidas'}
                ]});
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            res.render('users/welcome');
            console.log(req.session.usuarioLogueado);
            
        } else {
            return res.render('users/login', {errors: errors.errors});
        }
        //res.send(errores);
        /*if (!errores.isEmpty()) {
            return res.render('users/login', { mensajesDeError: errores.mapped()});
        }*/
    },
    welcome: (req, res) => {
        if (req.session.usuarioLogueado == undefined) {
            res.send('No estás logueado');
        } else {
            res.render('users/welcome')
        }
    }
}

module.exports = usersController;