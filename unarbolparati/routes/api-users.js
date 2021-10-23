const express = require('express');
const router = express.Router();
//importando controlador de apisUsers
const apiUsersController = require('../controllers/api-usersController');
router.get('/', apiUsersController.list);
router.get('/search', apiUsersController.search);
router.get('/:id', apiUsersController.show);
router.post('/', apiUsersController.store);
router.delete('/:id', apiUsersController.delete);
module.exports = router;