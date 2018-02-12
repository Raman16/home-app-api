const fs=require('fs');
const express= require('express');
//var bodyParser=require('body-parser');

const {mongoose}=require('./db/mongoose');
const {Users}=require('./model/Users');


var app=express();

//app.use(bodyParser.json());

// app.post('/todos',(req,res)=>{
//    //console.log(req.body);
//    var todo=new Todos({
//        text:req.body.text
//    });
//    todo.save().then((doc)=>{
//        //console.log('Todo created'+doc);
//        res.status(400).send(doc)
//    },(err)=>{
//       // console.log('Error in creating Todo:'+err);
//       res.send(err);
//    });

// });


// app.get('/todos',(req,res)=>{
    
//     Todos.find().then((todos)=>{
//     res.send({
//         todos
//     });
//    });
// },(err)=>{
//     console.log('unable to get'+err);
// })



var server=app.listen(3007,()=>{
   console.log('Started on  port 3000');   
});
//Error log file below
 server.on('error',(err)=>{
   fs.appendFileSync('log',`${err}\n`);
 });

// app.set('port', process.env.PORT || 3000);

// var server = app.listen(app.get('port'), function() {
//   debug('Express server listening on port ' + server.address().port);
// });