require('dotenv').config()
const connection = require('../config/config')
const jwt = require('jsonwebtoken')
const Joi = require('@hapi/joi');


exports.login = (req, res) => {
    const schema = {
        username: Joi.string().max(50).required(),
        password: Joi.string().max(255).required(),
    }

    Joi.validate(req.body, schema)
        .then(() => {
            connection.query('select * from users where username = ? and password = ? ',
                    [req.body.username, req.body.password])
                .then(([value]) => {
                    if (value[0]) {
                        jwt.sign({
                            iss: 'Kelompok5',
                            aud: value
                        }, process.env.SECRET_KEY, {
                            algorithm: 'HS256'
                        }, function (err, token) {
                            res.json({
                                status: 200,
                                token: token
                            })
                        });
                    } else {
                        res.json({
                            status: 204,
                            message: 'password or username wrong'
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status: 204,
                        message: err.details[0].message
                    })
                });
        }).catch(err => {
            res.json({
                status: 204,
                message: err.details[0].message
            })
        })
}