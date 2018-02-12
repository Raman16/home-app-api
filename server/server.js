const fs=require('fs');
const express= require('express');
//var bodyParser=require('body-parser');

const {mongoose}=require('./db/mongoose');
const {Users}=require('./model/Users');


var app=express();

app.get('/properties',(req,res)=>{
   res.send('show properties');
});

app.post('/properties',(req,res)=>{
  res.send('post properties');
});


var server=app.listen(3008,()=>{
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