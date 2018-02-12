var mongoose=require('mongoose');
const fs=require('fs');
mongoose
.connect('mongodb://localhost:27017/TodoApp')
.then((res)=>{ console.log('connected')})
.catch((err)=>{ 
   fs.appendFileSync('log',`${err}\n`);       
});