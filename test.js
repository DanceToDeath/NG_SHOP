/**
 * Created by ³þº® on 2016/7/31.
 */
function encrypt(str){
    return require('crypto').createHash('md5').update(str).digest('hex');
}

console.log(encrypt("384840951@qq.com"))