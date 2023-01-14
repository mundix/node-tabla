const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('yargs')
   .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true
   })
   .option('l', {
      alias: 'listar',
      type: 'boolean',
      demandOption: true,
      default: false
   })
   .check( (argv, options) => {
      if(isNaN(argv.b)) {
         throw 'La base tiene que ser un número'
      }
//Si no hay error debe retornar true
      return true;
   })
   .argv;

// impriman la tabla del 5
console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l)
   .then(nombreArchivo => console.log(nombreArchivo))
   .catch( err => console.error(err));