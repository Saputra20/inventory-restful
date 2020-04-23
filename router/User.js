const express = require('express');
const router = express.Router();
const userController = require('../controller/User')
const auth = require('../middleware/Auth');

router.get('/', auth.auth , userController.index);

router.get('/show/:id', userController.show);

router.post('/', userController.store);

router.post('/update', userController.update);

router.delete('/', userController.delete);


module.exports = router