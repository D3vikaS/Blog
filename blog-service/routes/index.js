const express = require('express');
// var router = express.Router();
// const mysql = require('mysql');
const bodyparser = require('body-parser');
var app = express();
//Configuring express server
app.use(bodyparser.json());

// const db = mysql.createConnection(
//     {
//         host:"localhost",
//         user:'root',
//         password:"",
//         database:"blogdb",
//         port:"3306"

//     }
// );
app.get('/',(req,res)=>{
  try {
    res.send('hollo')
  } catch (error) {
    console.log(error)

  }
})
app.listen(8000,()=>{
  console.log('connected to port 8000')
})

