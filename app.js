const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>Let us go</h1>")
})

app.get('/about', (req, res)=>{
    // res.send("<h1>Let us go</h1>")
})

app.get('/404', (req, res)=>{
    res.send("<h1>Let us go</h1>")
})


app.listen(3000)