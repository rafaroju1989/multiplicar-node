//requireds
const fs = require('fs') //Required de proyecto propio de Node
    // const fs = required('express') //Expansiones de Node (echos por terceros)
    // const fs = required('./nombre_archivo') //Archivos hechos por nosotros
const colors = require('colors');
//*********************Mi INTENTO *************************
// modulo.exports.crearArchivo //Una forma de exportar a global
const crearArchivo = async(base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            resolve(`tabla-${base}.txt`);
        });
    })
}


const listarTabla = async(base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (limite < 0) {
            reject('Por favor verifique el limite');
        } else {
            console.log("=======================".green);
            console.log(`===tabla del ${base}===`.green);
            console.log("=======================".green);
            for (let i = 0; i <= limite; i++) {
                console.log(`${base} x ${i} = ${base*i}`);
            }
            resolve('Fin');
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}