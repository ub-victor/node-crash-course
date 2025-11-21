const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.setHeader('Content-Tyoe', 'text/html');
    

});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for requests on port 3000')
})