const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("../routes/Users/Users");
const mongoose = require("mongoose");


//db connection...
mongoose.connect("mongodb+srv://adminRocks3:abcd123@node-rest-firstapp-k7zw4.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser : true}).catch(err => {
    console.log("erorr ;;;;;" + err);
    
})



app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


//CORS...
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, PATCH, DELETE")
        return res.status(200).json({});
    }
    next();
})

app.use("/users", users);

module.exports = app;
