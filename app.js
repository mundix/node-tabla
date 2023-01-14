const { crearArchivo } = require('./helpers/multiplicar');

// impriman la tabla del 5
console.clear();

console.log(process.argv);


const base = 4;
crearArchivo(base)
   .then(nombreArchivo => console.log(nombreArchivo))
   .catch( err => console.error(err));