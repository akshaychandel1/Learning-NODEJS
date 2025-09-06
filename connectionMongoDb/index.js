const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require("./routes/users")

const PORT = 3000;

//body parser
app.use(express.json());
connectDB();

app.use('/api',users);


app.get('/',(req,res)=>{
    console.log('hello');
    res.send("hello this is response")
})

app.listen(PORT,()=>{
    console.log('Server is Running');
    
});