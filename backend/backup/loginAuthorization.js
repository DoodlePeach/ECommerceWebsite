var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/dbUsingCode";

function loginQueryExecuter(query,res){
 
    MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology : true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dbUsingCode");
        dbo.collection("accountLogin").find(query).toArray(function(err, result) {
        if (err) 
            throw err;
        db.close();
        console.log(result);
        if(result.length>0){
            res.status(200).end();
            console.log('ok');
        }
        else{
            console.log('loginFailed');
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
