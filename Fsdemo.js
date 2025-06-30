const fs = require('fs')

// read file
// fs.readFile('./new.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
// console.log(data)
//     }
    
// }) 

// fs.readFile('./new.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(data);
        
//     }
// })

// synchronous read
// const data =  fs.readFileSync('./new.txt','utf-8')

// console.log(data);

// write file

// fs.writeFile('./text.txt','helllo word',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file is created");
        
//     }
// })

// fs.writeFile('./new.txt','hello world',(err,data)=>{
//     if(err){
//         console.log(err);
       
//     } else{
//         console.log("file is created");
            
//         }
// })

// update file


// fs.appendFile('./new.txt','n/hhfjdk',(err,data)=>{
//     if(err){
//         console.log(err);
       
//     } else{
//         console.log("file is created");
            
//         }
// })
// rename 
// fs.rename('new.txt','sample.txt',(err,data)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log("file is created ");
        
//     }
// })

// deletefile 


// fs.unlink('text.txt',(err,data)=>{
//    if(err){
//     console.log(err);
    
//    }else{
//     console.log("file is delteds");
    
//    }
// })