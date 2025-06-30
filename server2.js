const port = process.env.PORT||5000
const http  = require('http');

const User = [
    {id:1,name:"alen"},
     {id:2,name:"john"},
      {id:3,name:"alex"}
]

const server = http.createServer((req,res)=>{
    if(req.url==='/api/user'&&req.method==='GET'){
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify(User))
        res.end()
    }else{
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify({message:"notfount"}))
        res.end()
    }
})
server.listen(port,()=>{
    console.log("running",{port});
    
})


