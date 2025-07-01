const express  =  require('express')
const app  = express();
const port = 3000;




app.get('/',(req,res)=>{
    res.send('hello world hi ')
})
app.get('/product',(req,res)=>{
    res.send('product page ')
})
app.post('/product',(req,res)=>{
    res.send('product Updated ')
})
app.put('/product',(req,res)=>{
    res.send('product edit ')
})
app.delete('/product',(req,res)=>{
    res.send('product deleted')
})
app.listen(port,()=>{
    console.log(`server is ready on the port ${port}`);
    
})

