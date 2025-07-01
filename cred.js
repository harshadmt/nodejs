const express = require('express')
const app = express()
const port = 4000;
app.use(express.json())
 var users=[
    {id:1,name:"alen",email:"alen@gamil.com"},
     {id:2,name:"alex",email:"alex@gamil.com"},
      {id:1,name:"john",email:"john@gamil.com"}
    
 ]
app.get('/users',(req,res)=>{
     return res.json(users)
})

app.get('/users/:id',(req,res)=>{
    const id=parseInt(req.params.id)
     return res.json(users.find((user)=>user.id=== id))
})

app.post('/users',(req,res)=>{
    const {name,email}=req.body;
    const user = {id: users.length+1,name,email}
    users.push(user)
    return res.json(user)
})
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.send('User deleted successfully!');
});
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    users[index] = updatedUser;
    res.send('User updated successfully!');
  } else {
    res.status(404).send('User not found');
  }
});






app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})