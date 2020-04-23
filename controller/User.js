const user = require('../model/User')

exports.index = (req, res) => {
    res.json({
        message: 'wellcome in user router get index'
    });
};

exports.show = (req, res) => {
    res.json({
        message: 'wellcome in user router get show'
    });
};

exports.store = (req, res) => {
    res.json({
        message: 'wellcome in user router post index'
    });
};

exports.update = (req, res) => {
    res.json({
        message: 'wellcome in user router post update'
    });
};

exports.delete = (req, res) => {
    res.json({
        message: 'wellcome in user router delete'
    });
};