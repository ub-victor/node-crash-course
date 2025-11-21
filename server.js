const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);

    // This is for plain text
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('hello, ninja');
    // res.end();  

});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for requests on port 3000')
})