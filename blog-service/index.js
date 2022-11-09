const express = require('express');
var router = express.Router();
const mysql = require('mysql');
const bodyparser = require('body-parser');
const core = require('cors');
const { observable } = require('rxjs');
var app = express();
//Configuring express server
app.use(bodyparser.json());
app.use(core());

const PORT = 8000;
const db = mysql.createConnection(
    {
        host:"localhost",
        user:'root',
        password:"cde3CDE#",
        database:"blogdb",
        port:"3306"

    }
);
app.get('/',(req,res)=>{
  let qr = `select * from blogtable`;
  db.query(qr,(err,result)=>{
    if(err){
      console.log(err);
    }

      res.send(result)
      

  })
})

app.listen(PORT,()=>{
  console.log('connected to port ', PORT)
})

