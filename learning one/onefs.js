const { log } = require('console');
const fs = require('fs');

//Syncronous
// fs.writeFileSync('read.txt', 'Welcome to my channel');

//Asynchronous
// fs.writeFile('read.txt', 'Asynchronous write', (err) =>{
//     if (err)console.log('Error in Creatig file ', err ,err.message) 
//         else{
//             console.log('File is created successfully');        
//     } 
// })

//Synchronous Read
// const result = fs.readFileSync("read.txt", 'utf-8')
// console.log(result);

// // Asunchronous Read
// fs.readFile('read.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log('error', err);
//     }
//     else{
//         console.log(result);    
//     }
// })

// Append - Adding inside the written one

// fs.appendFile('read.txt','text come from the appending of the file', (err)=>{
//     if (err) {
//         console.log(err);
//     }
// })

// // Synchronus
// fs.appendFileSync('read.txt',"appending with Sync")
// console.log("Done");

// fs.rename('read.txt','renamed.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log('file renamed');
        
//     }
// })

// fs.renameSync('read.txt', 'renamed.txt');
// console.log("file successfully renamed");

// copy file 

// fs.cp('renamed.txt','copide.txt', (err)=>{
//     if (err) {
//         console.log(err)
//     }
//     else{
//         console.log("done copied");
//     }
    
// })

// fs.unlink('./copide.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else{
//         console.log("File Deleted successdfully");
//     }
// })
// fs.stat('renamed.txt',(err,stat)=>{
//     if (err) {
//         console.log(err)
//     }else{
//         console.log(stat);
        
//     }
// })
fs.mkdir( './banana', (err)=>{
    console.log(err);
})