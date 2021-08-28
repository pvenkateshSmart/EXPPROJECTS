var express = require('express');
var router = express.Router();
var mongose = require('mongoose');


var dbrl = require("../db_config").DB_URL;

//mongose.connect("mongodb:localhost:27017/sonline");
mongose.connect('mongodb://10.60.1.71:27017/Touchstone_V3', {
  useNewUrlParser: true, useUnifiedTopology: true ,useUnifiedTopology: true,useCreateIndex: true,useFindAndModify: false})
   
     

  
//mongose.connect(dbrl);

mongose.connection.on("connected", () => {
  console.log("mongo db connected");
});



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
