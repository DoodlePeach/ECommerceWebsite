var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbUsingCode";

function findQueryExecuter(collectionName,query,res){
 
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology : true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dbUsingCode");
        dbo.collection(collectionName).find(query).toArray(function(err, result) {
        if (err) throw err;
        db.close();
        // Here is the Response Object which is saad's need
        res.send(result); 

        });
    });
}

function getAllItem(res){
    var query={};
    return findQueryExecuter("items",query,res)
}

function findItemsById(orderId,res){
    var query = { _id: orderId };
    return findQueryExecuter("items",query,res);
}

function findItemsByName(name,res){
    var query = {name:name}
    return findQueryExecuter("items",query,res);
}

function findItemsByCategory(category,res){
    var query = {category:category}
    return findQueryExecuter("items",query,res);
}

function findItemsByNameAndCategory(name,category,res){
    var query = {$and: [ { name: { $eq: name } }, { category: { $eq: category } } ] }
    return findQueryExecuter("items",query,res);
}

module.exports.findItemsById = findItemsById;
module.exports.findItemsByCategory = findItemsByCategory;
module.exports.findItemsByName = findItemsByName;
module.exports.findItemsByNameAndCategory = findItemsByNameAndCategory;
module.exports.getAllItem = getAllItem;
