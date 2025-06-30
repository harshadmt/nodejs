// const http  = require('http');

// const port = 8000;

// const server = http.createServer((req,res)=>{
//     res.write("hello world")
//     res.end()
// })

// server.listen(port,()=>{
//     console.log("server is running ");
    
// })

const http  = require('http')

const port =5000

const server  = http.createServer((req,res)=>{
    res.write('hello')
    res.end()
})

server.listen(port,()=>{
    console.log("RUNNING");
    
})


const http = require('http')
require('dotenv').config();

const PORT = process.env.PORT;

const app  =  http.createServer((req,res)=>{
    if(req.url==='/'){
    res.writeHead(200,{"content-type":'text/html'})
    res.statusCode = 404
    res.end('<h1>home</h1>')
    }else if(req.url==='/about'){
        res.writeHead(200,{"content-type":'text/html'})
  
    res.end('<h1>about</h1>')
    }else{
       res.writeHead(500,{"content-type":'text/html'})
     res.end('<h1>not found</h1>') 
    }
})

app.listen(PORT,()=>{
    console.log("runnimg",{PORT});
    
})