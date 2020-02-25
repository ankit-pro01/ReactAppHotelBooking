const express = require("express");
const router = express.Router();
const bcrypt = require ("bcrypt");
const Users = require("../../modules/Users");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

router.get("/", (req, res, next) => {
    res.status(200).json({
        message : "welcome users"
    })
    
});

router.post("/signin", (req, res, next) => {

    const requestedPass = req.body.password;
    const requsetedEmail = req.body.email; 

    Users.find({ email : requsetedEmail})
    .exec()
    .then( result => {

        if (result.length >= 1){
            res.status(409).json({
                message : "Entry Already Exists"
            })
        }
        else {
            bcrypt.hash(requestedPass, 10, (err, hashed) => {

                if(err){
                    res.status(500).json({
                        message : err
                    })
                }
                else {
                        const user = new Users({
                            _id: new mongoose.Types.ObjectId(),
                            email: requsetedEmail,
                            password: hashed 
                        });

                        user.save()
                        .then(result => {
                            console.log(result);
                            res.status(201).json({
                                message : "Entry Created"
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(201).json({
                                message : "Entry not Created"
                            })
                        })
                    }
                })
            }        
        })
        .catch(err => {
            console.log(err);
        })
});
   

router.post("/login", (req, res, next) => {
    const reqEmail = req.body.email; 
    const reqPass = req.body.password; 
    
    Users.find({ email : reqEmail})
    .exec()
    .then( user => {
        bcrypt.compare(reqPass, user[0].password, (err, result) => {
            if(err){
                return res.status(500).json({
                    message : "Auth Fail"
                })
            }
            if(result) {

                const token = jwt.sign({
                    userId  : user[0]._id,
                    email : user[0].email,
                },
                "JWT_SECRET",
                {
                    expiresIn : "1h"
                })

                return res.status(200).json({
                    message :"Auth Success",
                    token : token
                })
            }
            res.status(500).json({
                message : "Auth Fail"
            })
        })   
    })
    .catch(err => {
        //console.log(err);
        res.status(500).json({
            message : "Auth Fail"
        })
    })  
})  

module.exports = router;