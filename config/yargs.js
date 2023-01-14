const argv = require('yargs')
   .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Esta es la base para la tabla de multiplicar'
   })
   .option('l', {
      alias: 'listar',
      type: 'boolean',
      demandOption: true,
      default: false,
      describe: 'Esto permite listar tabla de multiplicar'
   })
   .check( (argv, options) => {
      if(isNaN(argv.b)) {
         throw 'La base tiene que ser un número'
      }
      return true;
   })
   .argv;

   module.exports = argv;