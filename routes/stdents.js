var express = require('express');
var router = express.Router();

const mongoose=require("mongoose");

var emplscham=new mongoose.Schema({
    Fullname :{
        type :String
    },
    Mobile :{
        type :String
    }
});

mongoose.model('Employee',emplscham)


