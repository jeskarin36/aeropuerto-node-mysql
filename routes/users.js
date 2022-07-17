var express = require('express');
const { render } = require('express/lib/response');
var router = express.Router();





router.post('/', function(req, res, next) {
  const con = require('../conection/conection');
   let datos;
   let datos2;
  let Destino=req.body.Destino;
  let Origen=req.body.Origen;
  let Ida=req.body.Ida;
  let Vuelta=req.body. Vuelta;
  let Adulto=req.body.Adulto;
  let Niño=req.body.Niño;
  let texto="Not fount";
  let sql='select Destino, Origen, Adultos, Niños, Precio,DATE_FORMAT(Vuelta,"%a %b %e %Y") As Vuelta, DATE_FORMAT(Ida,"%a %b %e %Y") As Ida,Hora,Precio from vuelos where Destino="'+Destino+'" and Origen="'+Origen+'"';
  con.query(sql, function (err, results, fields) {
    if (err) throw err;
    if(results.length){
      let sql2='select Destino, Origen, Adultos, Niños, Precio, DATE_FORMAT(Vuelta,"%a %b %e %Y") As Vuelta, DATE_FORMAT(Ida,"%a %b %e %Y") As Ida,Hora,Precio  from vuelos where Destino= ?';
      con.query(sql2,Destino, function (err, otross, fields) {
        if (err) throw err;
        if(otross.length){
          res.render('buscar',{result:results,otros:otross});
        }else{
          res.render('notfount',{texto:Destino});
        }
       
      });
    }else{
      res.render('notfount',{texto:Destino});
    }
    console.log(Destino)
  });



   
    
});




router.get('/Destino', function(req, res, next) {
  const con = require('../conection/conection');
  let sql='select * from vuelos where ID= ?';
  let id=req.query.id;
  con.query(sql,id, function (err, result, fields) {
    if (err) throw err;
    res.render('articulo',{result:result});
    console.log(result)
  });
 });




module.exports = router;
