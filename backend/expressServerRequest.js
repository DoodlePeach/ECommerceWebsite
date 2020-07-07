const express = require('express')
const bodyParser = require('body-parser')
const findDataBase = require('./findQueryExecuter.js');
const insertDatabase = require('./insertQueryExecuter.js')
const loginAuthorization = require('./loginAuthorization.js');
var url = require('url');
const app = express();
const cors = require('cors')
var mongoose = require('mongoose');
app.use(cors())
var urlencodedParser = bodyParser.json()

app.use(bodyParser.urlencoded({extended:true}))

app.get('/items/get?',function(req,res){
    
    var address = req.url;
    var u = url.parse(address,true)

    if(u.query.name && u.query.category)
        findDataBase.findItemsByNameAndCategory(u.query.name,u.query.category,res);
    else if(u.query.name)
        findDataBase.findItemsByName(u.query.name,res)
    else if(u.query.id)
        findDataBase.findItemsById(mongoose.Types.ObjectId(u.query.id),res)
    else if(u.query.category)
        findDataBase.findItemsByCategory(u.query.category,res) 
    else
        findDataBase.getAllItem(res);           
})

app.put('/items/add', urlencodedParser, function(req,res){
    console.log('Add Item Request Recieved : \n')
    console.log(req.body);
    insertDatabase.insertItem( req.body.name,req.body.price,req.body.description,req.body.url_link,req.body.category,res);
})

app.put('/accounts/signup', urlencodedParser,function(req,res){
    console.log("Your Sign Up Request Recieved : \n")
    insertDatabase.insertSignUpModel(req.body.email,req.body.password,req.body.username,req.body.address,res);
})

app.post('/accounts/login', urlencodedParser,function(req,res){
    console.log("Your request for login Recieved")
    loginAuthorization.loginAuthorization(req.body.email,req.body.password,res)
})

app.post('/cart',urlencodedParser,function(req,res){
    
    console.log("Your Request for Order insertion Recieved");
    insertDatabase.insertOrder(req.body.email,req.body.cart,req.body.status,res);
})

app.listen(3000,function(req,res){
    console.log('Server started Successfully');
})
