const fs = require('fs');

// reading files

fs.readFile('./docs/blog1.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    //console.log(data); /// it will output a buffer / code the file
    console.log(data.toString());
})

// writing files

// directories

// deleting files