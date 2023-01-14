const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
   try {

      const fileName = `./salida/tabla-${base}.txt`;


      let salida, consola = '';

      for (let i = 1; i <= hasta; i++) {
         salida += ` ${base} x ${i} = ${base * i} \n`;
         consola += ` ${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
      }

      if (listar) { 

         console.log('===================='.green);
         console.log('tabla del:', colors.blue(base));
         console.log('===================='.green);
         console.log(consola);

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