const express = require('express');
const app = express();
const userModel = require('./usermodel')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', async (req, res) => {
  const createdUser = await userModel.create({
    name:'Akshay Chandel',
    email:'akshay@gmail.com',
    username:'akshay'
  }) 
  res.send(createdUser)
  // console.log(createdUser);
});

 app.get('/update', async (req, res)=>{
   let updateUser = await userModel.findOneAndUpdate({username:'akshay'}, {name:'akshay chandel ji'},{new: true})
    res.send(updateUser)
  })

  app.get('/read', async (req,res)=>{
    let allUsers = await userModel.find();
    res.send(allUsers)
  })

  app.get('/delete', async(req,res)=>{
    let removedUser = await userModel.findOneAndDelete({username:'akshay'} );
    res.send(removedUser)
  })

app.listen(3000);
console.log('Server is running on http://localhost:3000');