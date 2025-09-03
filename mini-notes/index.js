const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs')

app.set('view engine', "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname,"public")));

app.get('/', function(req, res) {
    fs.readdir(path.join(__dirname, 'files'), function(err, files) {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading directory.');
        }
        res.render('index', { files: files });
    });
});

app.post('/create', function(req, res) {
    console.log(req.body);  
    fs.writeFile(`./files/${req.body.title.split(" ").join('')}.txt`, req.body.details, (err)=>{
        res.redirect('/')
    } )
});

app.get('/files/:filename', function(req, res) {
        fs.readFile(`./files/${req.params.filename}`, function(err,filedata){
            if (err) {
                console.log(err);
            } else{
                res.render('show', {filename: req.params.filename, filedata: filedata})
            }
        })
});

// app.get('/edit/:filename', function (req, res) {
//   const filePath = path.join(__dirname, "files", req.params.filename);

//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Error reading file.");
//     }
//     res.render("edit", { filename: req.params.filename,filedata: data});
//   });
// });
    // create new
// edit existing file
// Show edit form
// Edit form
app.get("/edit/:filename", (err,req, res) => {
    fs.readFile(`./files/${req.params.filename}`, "utf8", (err, data) => {
    if (err) return res.send("File not found");
    res.render("edit", { filename: req.params.filename, filedata: data });
  });
});

// Save edits
app.post("/edit/:filename", (req, res) => {
  fs.writeFile(`./files/${req.params.filename}`, req.body.details, () => {
    res.redirect("/");
  });
});



app.listen(3000, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Working");
});