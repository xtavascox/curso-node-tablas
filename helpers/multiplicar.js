const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 5, listar,hasta) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i} \n`;
    }

    if (listar) {
      console.log("===================".rainbow);
      console.log(`Tabla base ${base}`.rainbow);
      console.log("===================".rainbow);
      console.log(salida.rainbow);
    }
      
    fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
    return `tabla-${base}.txt creado`;

  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
