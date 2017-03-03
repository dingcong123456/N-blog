var express=require('express');
var indexRouter=require('./routes/index');
var usersRouter=require('./routes/users');
var app=new express();
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.listen(3000);