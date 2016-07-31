/**
 * Created by ³þº® on 2016/7/29.
 */

var express =require('express');
var path =require('path');

var app =express();
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname,'app','public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('users/login',users);
var a =path.join(__dirname,'app','public');
console.log(a)
app.listen(8080);
console.log("server has run at port 8080")