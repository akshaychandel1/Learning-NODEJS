const express = require('express');
const app = express();


app.use(function (req,res,next) {
    console.log("MiddleWare Ran");
    next();
})

app.get('/', (req, res) => {
    res.send('connected to express');
});

app.get("/profile", (req, res)=>{
    res.send("This is profile page");
    // return next();    its made for the error handling so it will shoe error
})

app.use(function (err,req,res,next){
    console.error(err.stack);
    res.status(500).send('Something broke!');   
})

app.listen(3000, () => {
    console.log('server is running on port 3000');
});