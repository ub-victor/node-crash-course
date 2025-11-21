const fs = require('fs');

// reading files

fs.readFile('./docs/blogs1.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})

// writing files

// directories

// deleting files