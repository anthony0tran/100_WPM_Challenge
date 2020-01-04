const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongoose');

// TODO: set db url
const dbURL= 'mongodb://localhost:27017/wpmDB';
const ngServer = 'http://localhost:4200';

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit:'5mb'}));

app.use(function (req, res, next){
  res.setHeader('Access-Control-Allow-Origin', ngServer);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
}) ;

const Schema = mongo.Schema;

const UsersSchema = new Schema({
  username: {type: String}
},{versionKey: false});

const model = mongo.model('wpmDB', UsersSchema, 'userNames');

app.post("/api/saveUser",function(req,res){
  const item = {
    username: req.body.username
  };

  console.log(req.body);

  mongo.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true },function(err, db){
    //assert.equal(null, err);
    model.db.collection('userNames').insertOne(item, function(err, result){
      //assert.equal(null, err);
      console.log('item inserted');
      if(err){
        res.send(err);
      } else {
        // res.send(result);
      }
      db.close();
    })
  })
});

app.get("/api/getUser",function (req,res) {
  mongo.connect(dbURL,{ useNewUrlParser: true, useUnifiedTopology: true },function(err,db){
    model.find({},function(err,data){
      if(err){
        res.send(err);
      } else {
        res.send(data);
      }
      db.close();
    });
  })
});

app.listen(8080, function (){
  console.log("Listening on port 8080!");
});
