const { Router } = require('express');
const UserController = require('../controllers/user.controller');

const userRoutes = Router();

userRoutes.get('/', UserController.index);

module.exports = { userRoutes };
