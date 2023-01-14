const fs = require('fs');

const crearArchivo = (base = 5) => {

   console.log('====================');
   console.log('tabla del:', base);
   console.log('====================');

   let salida = '';

   for(let i = 1; i <= 10 ; i ++){
      salida += ` ${base} x ${i} = ${base * i} \n`;
   }

   // console.log(salida);

   // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
   //    if(err) throw err;
   //    console.log(`tabla-${base}.txt Creado`);
   // } )
      return new Promise( ( resolve, reject ) => {
         try {
            fs.writeFileSync( `tabla-${base}.txt`, salida);   
            resolve(`tabla-${base}.txt`)
         } catch (error) {
            reject(error);
         }
      });
      
   // console.log(`tabla-${base}.txt Creado`);

}


const getFileName = async ( base ) => {
   const nombre = await crearArchivo(base);
   return nombre;
}

//para exportar en node es diferente 
module.exports = {
   getFileName
}