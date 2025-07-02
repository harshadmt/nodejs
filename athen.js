const express = require('express');
const app  = express()
const jwt  =  require('jsonwebtoken')
require('dotenv').config()
const authmiddle = require('./middleware/auth')

app.use(express.json())


app.post('/login',(req,res)=>{
    const {username,password} = req.body;


    if(username === 'admin'&& password === '123'){
        const token =  jwt.sign({user:username},process.env.JWT_SECRET,{expiresIn:'1h'})
        return res.json({token})
    }
    res.status(401).json({error:"invalid"})
})


app.get('/dashbord',authmiddle,(req,res)=>{
    res.send(`welcome ${req.user.user},thiis is dashboard`)
})

app.listen(3000,()=>{
    console.log("server is ready");
    
})