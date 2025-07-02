const express = require('express')
const jwt  = require('jsonwebtoken')
require('dotenv').config()

module.exports = function (req,res,next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error:"token not provided"})
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.user = decoded;
        next()
    }catch(err){
        res.status(403).json({error:"invalid or expired token"})
    }
}   
