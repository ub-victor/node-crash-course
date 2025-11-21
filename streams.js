const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});

readStream.on('data', (chuck) =>{
    console.log(date);
    console.log('\n----- NEW CHUNK -----');
    console.log(chuck); // No need to put stringfy as if will get uncode when the fole get in
});