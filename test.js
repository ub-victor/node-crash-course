const name = 'mario';

const greet = (name) => {
    console.log(`Hello, ${name}!`)
}

greet.apply('mario');
greet('yoshi');