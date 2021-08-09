const fs = require('fs');
const path = require('path');
const { v4: getIdUsuario} = require('uuid');
getIdUsuario();
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
    }
}

module.exports = usersController;