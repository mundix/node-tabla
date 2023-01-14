const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('yargs').argv;

// impriman la tabla del 5
console.clear();

console.log(process.argv);
console.log(argv);

console.log('Base: yargs', argv.base);


// const base = 4;
// crearArchivo(base)
//    .then(nombreArchivo => console.log(nombreArchivo))
//    .catch( err => console.error(err));