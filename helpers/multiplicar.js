const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false) => {
   try {

      const fileName = `tabla-${base}.txt`;


      let salida = '';

      for (let i = 1; i <= 10; i++) {
         salida += ` ${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
      }

      if (listar) { 

         console.log('===================='.green);
         console.log('tabla del:', colors.blue(base));
         console.log('===================='.green);
         console.log(salida);

      }

      fs.writeFileSync(fileName, salida);

      return fileName.green;

   } catch (error) {
      throw error;
   }
}




//para exportar en node es diferente 
module.exports = {
   crearArchivo
}