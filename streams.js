const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');

readStream.on('data', (chuck) =>{
    console.log('----- NEW CHUNK -----');
    console.log(chuck);
});