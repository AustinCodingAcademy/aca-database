let fs = require("fs");

exports.create = function(type,data){
  
}
exports.find = function(type,id){

}
exports.findAll = function(type){
    let content = fs.readFileSync('./db.json', 'utf8');
    let obj = JSON.parse(content);
    let things = obj[type];
    return things;
}
