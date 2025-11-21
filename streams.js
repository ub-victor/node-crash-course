const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});

readStream.on('data', (chuck) =>{
    console.log('----- NEW CHUNK -----');
    console.log(chuck); // No need to put 
});