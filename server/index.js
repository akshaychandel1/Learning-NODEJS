const http = require('http')
const fs = require('fs')

const myServer = http.createServer((req,res)=>{
    const log =`${new Date().toLocaleString()}:${req.url}: New Req Recieved from\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch (req.url) {
            case '/': res.end('HomePage');
                break;
                case '/about': res.end('About');
                break;
            default: res.end('404 not found')
                break;
        }
    })
});

myServer.listen(8000, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Server Strated at http://localhost:8000/");
    
});