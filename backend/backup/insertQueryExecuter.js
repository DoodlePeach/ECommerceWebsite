var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbUsingCode";

function insertQueryExecuter(collectionName,query){
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology : true}, function(err, db) {
        if (err) console.log("Error before : ",+err);
        var dbo = db.db("dbUsingCode");        
        dbo.collection(collectionName).insertOne(query, function(err, res) {
          if (err) console.log("Error in Query : "+err);
          console.log("1 document inserted");
          db.close();
        });
      });
}

function insertItem(name,price,description,image_link,category){
    var myobj = {name: name, price:price,
        description:description,image_link:image_link,category:category }
        insertQueryExecuter("items",myobj);
}

function insertSignUpModel(email,password,username,address){
  var newUser = {_id:email,password:password,username:username,address:address}
      insertQueryExecuter("accountLogin",newUser);
}

function insertOrder(itemsIdArray,itemsCountArray,customerName,customerNumber,customerAddress){

    var myOrder = {itemsId:itemsIdArray,itemsCount:itemsCountArray,customerName:customerName,customerNumber:customerNumber,customerAddress:customerAddress}
    insertQueryExecuter("insertOrder",myOrder)
}

function insertOrderDelieveryProcess(orderId,delieveryBoyName){
    var myOrderInDelieveryProcess = {orderId:orderId,delieveryBoyName:delieveryBoyName}
    insertQueryExecuter("orderDelieveryProcess",myOrderInDelieveryProcess);
}

module.exports.insertItem = insertItem;
module.exports.insertOrder = insertOrder;
module.exports.insertOrderDelieveryProcess = insertOrderDelieveryProcess;
module.exports.insertSignUpModel = insertSignUpModel;

//module.exports.findItemsByNameAndCategory = findItemsByNameAndCategory;
/*
    var query = {name:name}
    return callback(findQueryExecuter("items",query,callback));
}

function findItemsByNameAndCategory(name,category){
    var query = {$and: [ { name: { $eq: name } }, { category: { $eq: category } } ] }
    return findQueryExecuter("items",query);
}


module.exports.findItemsByCategory = findItemsByCategory;
module.exports.findItemsByName = findItemsByName;
module.exports.findItemsByNameAndCategory = findItemsByNameAndCategory;
*/
//console.log(findItemsByNameAndCategory('Umer','11'));

/*

function insertPaymentRecieved(orderId){
  //  var myOrder = {}
}


*/
//insertItem(123,32,32,3,4,1,1,1);
//insertItem(235,"1","Umer","12","13","14","11");
