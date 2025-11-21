const { error } = require('console');
const fs = require('fs');

// reading files
/*
fs.readFile('./docs/blog1.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    //console.log(data); /// it will output a buffer / code the file
    console.log(data.toString());
})

console.log("Last line") // the readFile does not stop the program when it is waiting

*/

// writing files

/*

fs.writeFile('./docs/blog1.txt', "Ushindi Bihame Victoire , He is the bast , intelligent, clever bright ect ..", ()=>{
    console.log('File was written')
});

*/


// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
    if(err){
        console.log(err)
    }

    console.log('folder created');
    });

}else{
    fs.rmdir('.assets', (err)=>{
        if(err){
            console.log(err)
        }
    })
}


// deleting files