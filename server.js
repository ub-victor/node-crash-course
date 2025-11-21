const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.setHeader('Content-Tyoe', 'text/html');

    let path = './views'
    switch(req.url){
        case '/':
            path +=  'index.html';
            break;
        case '/about':
            path +=  'about.html';
            break;
        default:
            path +=  '404.html';
            break;
        
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);// it is only one res to send 
            res.end(data);
        }
    })
    

});

server.listen(3000, 'localhost', ()=>{
    console.log('Listening for requests on port 3000')
})