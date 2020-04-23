const express = require('express');
const router = express.Router();
const userController = require('../controller/User')

router.get('/', userController.index);

router.get('/show', userController.show);

router.post('/', userController.store);

router.post('/update', userController.update);

router.delete('/', userController.delete);


module.exports = router