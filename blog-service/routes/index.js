const express = require('express');
// var router = express.Router();
const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

const db = mysql.createConnection(
    {
        host:"localhost",
        user:'root',
        password:"",
        database:"blogdb",
        port:"3306"

    }
);
