const express =require("express");
//const SignUpModles = require("../models/SignUpModles");
const router=express.Router();
const signUpTemplate = require("../models/SignUpModles") 

//Encyrp Password, Show if username or email already exist.




router.post("/signup", (req, res)=>{
    // res.send("send");
    const entry= new signUpTemplate({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    signUpTemplate.findOne({username: entry.username}, (error, userExist)=>{
        if(userExist==null){
            signUpTemplate.findOne({email: entry.email}, (error, userExist)=>{
                if(userExist==null){
                    console.log(entry)
                    entry.save(error=>{
                        if(error){
                            console.log("error");
                        }
                        else{
                            res.json("Sucess")
                        }
                    })
                }
                else{
                    res.json("email Already eixst");
                }
            })
        }
        else{
            res.json("Username Already eixst");
        }
    })
  
   
    // .then(data=>{
    //     res.json(data)
    // })
    // .catch(error=>{
    //     console.log("failed")
    //     res.json(error)
    // })
})

router.post("/login", (req, res)=>{
    // res.send("send");
    const entry= {
       // name: req.body.name,
        username: req.body.username,
        //email: req.body.email,
        password: req.body.password
    }
    signUpTemplate.findOne(entry, (error, userExist)=>{
        if(userExist==null){
            res.json("Incorrect");
        }
        else{
            res.json("Correct");
        }
    })
    
})

module.exports=router;