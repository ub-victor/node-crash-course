// const name = 'mario';

// const greet = (name) => {
//     console.log(`Hello, ${name}!`)
// }

// greet('mario');
// greet('yoshi');

// Global object 

// console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
    
},3000);


const int = setInterval(()=>{
    console.log("In the interval")
})