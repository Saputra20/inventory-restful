const connection = require('../config/config')
const Joi = require('@hapi/joi');

exports.index = (req, res) => {
    connection.query('select * from users')
        .then(([values]) => {
            if (values[0]) {
                res.json({
                    status: 200,
                    message: values
                });
            } else {
                res.json({
                    status: 204,
                    message: 'sorry not found users'
                });
            }
        }).catch((err) => {
            console.log(err.details[0].message)
            res.json({
                message: err.details[0].message
            })
        })
};

exports.show = (req, res) => {
    const id = req.params.id
    connection.query('select * from users where id = ?',
            [id])
        .then(([values]) => {
            if (values[0]) {
                res.json({
                    status: 200,
                    message: values[0]
                });
            } else {
                res.json({
                    status: 204,
                    message: 'sorry users not found'
                });
            }
        }).catch((err) => {
            console.log(err.details[0].message)
            res.json({
                message: err.details[0].message
            })
        })
};

exports.store = (req, res) => {
    const schema = {
        name: Joi.string().max(50).required(),
        username: Joi.string().max(50).required(),
        lastname: Joi.string().max(50).required(),
        role: Joi.string().max(12).required(),
        password: Joi.string().max(255).required(),
    }

    Joi.validate(req.body, schema)
        .then(() => {
            connection.execute('insert into users (name ,username , lastname , role , password) values (?, ? ,? ,? ,?) ',
                    [req.body.name, req.body.username, req.body.lastname, req.body.role, req.body.password])
                .then(([values]) => {
                    res.json({
                        status: 201,
                        message: values
                    })
                }).catch(err => {
                    res.json({
                        status: 204,
                        message: err.message
                    })
                });
        }).catch(err => {
            res.json({
                status: 204,
                message: err.details[0].message
            })
        })
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