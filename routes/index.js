var express = require('express');
var router = express.Router();

const con = require('../conection/conection');
let data=null;
con.query("select * from vuelos", function (err, result, fields) {
    if (err) throw err;
    data=result;
    console.log(result);
    console.log(data);
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', dat:data });
});


 
module.exports = router;
