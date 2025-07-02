const express = require('express')
const app  = express()


const simplemiddleWare=(req,res,next)=>{
    console.log("hel");
    
    
}
app.use(simplemiddleWare)
app.get('/',(req,res)=>{
     res.send('hello world')
})




app.listen(3000,()=>{
    console.log("server is runing");
    
})