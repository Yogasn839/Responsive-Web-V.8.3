const express = require('express');
const router = express.Router();

const homeController = require('./controllers/home');
const gameController = require('./controllers/game');
const loginController = require('./controllers/login');
const usersController = require('./controllers/users');


//router//
router.get('/', homeController.home);
router.get('/login', loginController.loginGet);
router.post('/login', loginController.loginPost);
router.get('/users', usersController.users);
router.get('/users/:id', usersController.usersById);
router.get('/home', homeController.home);
router.get('/game', gameController.game);



//module//
module.exports = router;