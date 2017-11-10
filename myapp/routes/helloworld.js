var express = require('express');
var router = express.Router();
var user = require('../models/model1.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('hello world');      //res.render('helloworld',{})
});
router.get('/form', function(req, res, next) {
  user.find({}, {},function(err,result){
        res.render('form',{ data:result });
        //#
        
     });
    
});      //res.render('helloworld',{})

module.exports = router;