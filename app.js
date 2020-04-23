require('express-group-routes');
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mysql = require('mysql2');

const user = require('./router/User')
const item = require('./router/Item')
const categoryItem = require('./router/CategoryItem')
const authentication = require('./router/Authentication')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'inventory',
    password: 'saputra'
});


app.group("/api/v1", (router) => {
    router.use('/users', user)
    router.use('/items', item)
    router.use('/category-items', categoryItem)
    router.use('/' , authentication)
});

app.get('/', (req, res) => {
    res.json({
        message: connection
    })
});

module.exports = app