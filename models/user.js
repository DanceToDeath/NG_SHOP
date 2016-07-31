var mongoose =require('mongoose');
module.exports = mongoose.model('User',new mongoose.schema({
    username:String,
    password:String,
    email:String,
    avatar:String  //Í·Ïñ
}));