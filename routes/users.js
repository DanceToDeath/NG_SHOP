
var express =require('express');
var User = require('../models').User;
var router =express.Router();
var crypto = require('crypto');
function encrypt(str){
    return crypto.createHash('md5').update(str).digest('hex');
}
router.post('/reg',function(req,res){
    var user =req.body;
    var md5Email = encrypt(user.email);
    var avatar = 123;
    new User(user).save(function(err,user){
        if(err){

        }
    })
});