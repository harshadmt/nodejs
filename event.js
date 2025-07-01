// const  event  = require('events')

// let eventEmitter =  new event.EventEmitter;


// eventEmitter.on('hi',(a,b)=>{
//     let result = a+b
//     console.log(`the sum is ${a}+${b}=${result}`);
    
// })

// eventEmitter.emit('hi',10,20)

// const event = require('events')


// const eventEmitter = new event.EventEmitter;

// eventEmitter.on('hello',(a,b)=>{
//     let result = a*b;

//     console.log(`here the multi ${a}*${b}=${result}`);
    
// })

// eventEmitter.emit('hello',35,25)


// const event = require('events')

// const eventEmitter  = new event.EventEmitter;

// eventEmitter.on('hi',()=>{
//     console.log("event is emitted");
    
// })

// eventEmitter.emit('hi')

const event = require('events')

const eventEmitter  = new event.EventEmitter;

eventEmitter.on('order',(od)=>{
  console.log(`${od} is placed`);
  
})

eventEmitter.emit('order','coffee')