var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbUsingCode";

function loginQueryExecuter(query,res){
 
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology : true}, function(err, db) {
        
        if (err) throw err;
        
        var dbo = db.db("dbUsingCode");

        dbo.collection("accountLogin").find(query).toArray(function(err, accountLoginResult) {
        if (err) 
            throw err;
        
        if(accountLoginResult.length>0){

            var accountOrderDetails = {_id:accountLoginResult[0]._id}
            dbo.collection("orderHistory").find(accountOrderDetails).toArray(function(err, results) {
                if(err){
                    console.log("Error in Fetching Account Holder Order details" + err);
                }
                else{
                    
                    res.send({account:accountLoginResult[0],orders:results})
                    console.log(results);
                    console.log('Account Holder and Order has been send Successfully');
                    db.close();
                }
            });
        }
        else{
            console.log('Login Failed');
            db.close();
            res.status(404).end();  
        }
        });
        
    });
}

function loginAuthorization(email,password,res){
    var myQuery = {_id:email,password:password}
    return loginQueryExecuter(myQuery,res)
}

module.exports.loginAuthorization = loginAuthorization;
