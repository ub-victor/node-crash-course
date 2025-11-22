const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>Let us go</h1>")
})

app.get('/index.html', (req, res)=>{
    // res.send("<h1>Let us go</h1>")
    res.sendFile('./views/index.html', {root: __dirname});
})

app.get('/about', (req, res)=>{
    res.sendFile('./views/about.html', {root: __dirname});
})


app.listen(3000)