var express = require("express");

var router = express.Router();

var mongo = require("mongoose");

const customerModel = require('../models/papers-model');

router.get('/', function (req, res, next) {
    //res.send('Reposnf customer');
    customerModel.find(function (err, customeListResponse) {
        // console.log(customeListResponse);
        if (err) {
            res.send({ status: 500, message: "Unable" });
        }
        else {
            const countpap = customeListResponse.length;
            res.send({ status: 200, recordCount: countpap, result: customeListResponse })
        }

    });

});

router.get('/ceatecollection/:ame',function(req,res,next){
    mongo.dblistCollections({name: 'mycollectionname'})
    .next(function(err, collinfo) {
        if (collinfo) {
            // The collection exists
            console.log('test');
        }
    });

});


module.exports = router;