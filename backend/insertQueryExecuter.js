const { json } = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbUsingCode";

function insertQueryExecuter(collectionName,query,response){
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology : true}, function(err, db) {
            if (err) console.log("Error in Database Connectivity : ",+err);
            var dbo = db.db("dbUsingCode");        
            dbo.collection(collectionName).insertOne(query, function(err, res) {
            if (err){ 
                response.status(404).end() ;
                console.log("Insertion Error : "+err) 
            }
            else {
                console.log("1 document inserted");
                response.status(200).end();
            }            
            db.close();          
        });
      });
}

function orderInsertQueryExecuter(collectioName,query,response){
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology : true}, function(err, db) {
        if (err) console.log("Error in Database Connectivity : ",+err); var dbo = db.db("dbUsingCode");   
        
        var findPreviousOrder = {_id:query._id};

        dbo.collection(collectioName).find(findPreviousOrder).toArray(function(err,result){
            if(err) console.log("Error in Finding Previous order");
        
            else
            {
                if(result.length>0)
                {
                   
                    var updateQuery =  { $push: { cart:  query.cart  } };
                    dbo.collection("orderHistory").updateOne(findPreviousOrder,updateQuery,function(err,res){
                        if(err) {  response.status(404).end() ;
                            console.log("Document Not Appended" +err);}
                        else{
                         console.log("1 Document Inserted");
                         response.status(200).end() ;
                         db.close(); }
                    });
                }
                else
                {
                    db.close();
                    myOrder = {_id:query._id,cart:Array(query.cart)};  
                    insertQueryExecuter("orderHistory",myOrder,response)
                }
            }
        })        
  });
}

function insertItem(name,price,description,image_link,category,res){
    var myobj = {name: name, price:price,
        description:description,image_link:image_link,category:category }
        insertQueryExecuter("items",myobj,res);
}

function insertSignUpModel(email,password,username,address,res){
  var newUser = {_id:email,password:password,username:username,address:address}
      insertQueryExecuter("accountLogin",newUser,res);
}

function insertOrder(accountHolderId,cart,status,res){

    myOrder = {_id:accountHolderId, cart: { status: status, date: Date().toString(), cart: cart }};  
    orderInsertQueryExecuter("orderHistory",myOrder,res)
}

module.exports.insertItem = insertItem;
module.exports.insertOrder = insertOrder;
module.exports.insertSignUpModel = insertSignUpModel;

