const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        message: 'wellcome in item router get index'
    })
});

router.get('/show', (req, res, next) => {
    res.json({
        message: 'wellcome in item router get show'
    })
});

router.post('/', (req, res, next) => {
    res.json({
        message: 'wellcome in item router post index'
    })
});

router.post('/update', (req, res, next) => {
    res.json({
        message: 'wellcome in item router post update'
    })
});

router.delete('/', (req, res, next) => {
    res.json({
        message: 'wellcome in item router delete'
    })
});


module.exports = router