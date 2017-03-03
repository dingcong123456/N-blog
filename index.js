var express=require('express');
var app=new express();
app.get('/',function(req,res){
    res.send('helloword');
}).listen(3000);