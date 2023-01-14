const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {
   try {

      const fileName = `tabla-${base}.txt`;


      let salida = '';

      for (let i = 1; i <= 10; i++) {
         salida += ` ${base} x ${i} = ${base * i} \n`;
      }

      if (listar) {

         console.log('====================');
         console.log('tabla del:', base);
         console.log('====================');
         console.log(salida);

      }

      fs.writeFileSync(fileName, salida);

      return fileName;

   } catch (error) {
      throw error;
   }
}




//para exportar en node es diferente 
module.exports = {
   crearArchivo
}