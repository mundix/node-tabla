const fs = require('fs');

const crearArchivo = async (base = 5) => {
   try {

      const fileName = `tabla-${base}.txt`;

      console.log('====================');
      console.log('tabla del:', base);
      console.log('====================');

      let salida = '';

      for (let i = 1; i <= 10; i++) {
         salida += ` ${base} x ${i} = ${base * i} \n`;
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