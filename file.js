const express  =  require('express')
const app  = express();
const port = 5000;
const path  = require('path')



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))
})

app.listen(port,()=>{
    console.log(`server is ready on the port ${port}`);
    
})