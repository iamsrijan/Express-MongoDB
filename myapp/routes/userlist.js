var express = require('express');
var router = express.Router();
var user = require('../models/model1.js');

/* GET users listing. */

router.post('/insert', function(req, res, next) {
     
      var model = new user({
    name: req.body.name,
    age: req.body.age
});
 model.save(function (err, results) {
     user.find({},{},function(err,result){
            res.redirect('/helloworld/form');     
         });
        
    });


});


// router.post('/delete', function(req, res, next){
//     var id = req.body._id;

//     user.findByIdAndRemove(id, function(err, results){
//         if(err) res.render('error', { error: 'Error deleting todo'});
       
//     });
//     model.save(function (err, results){
//     	res.send('deleted');
//     });
// });


router.post('/delete', function(req, res){
    

    user.findOneAndRemove({_id: req.body._id}, function(err, results){
        if(err) {
        	console.log(err);
        	return res.send(500, {error: err});
        }
        if (results==null) return res.send({
        	msg: "NULLs"
        });
        return res.send({msg: ''});

    });
});



router.post('/edit', function(req, res){
    
    user.find({ _id: req.body._id }, function(err, data){
    	console.log(data);
   		res.send(data);
    });



    // user.findOneAndUpdate({_id: req.params.id}, {content: req.body.content}, function(err, results){
    //     if(err) {
    //     	console.log(err);
    //     	return res.send(500, {error: err});
    //     }
    //     if (results==null) return res.send({
    //     	msg: "NULLs"
    //     });
    //     return res.send({msg: ''});

    // });
});
   

   router.post('/edit1', function(req,res){
 		var id=req.body._id;
   		var name=req.body.name;
   		var age=req.body.age;

//   		console.log(req.body);

   		user.findOneAndUpdate({_id: req.body._id }, req.body, function(err, results){
      if (err){
      	console.log("error");
      }
    console.log(results);
            res.redirect('/helloworld/form');     
         });
        
 	
console.log(id);
console.log(req.body);
  

   });








module.exports = router;