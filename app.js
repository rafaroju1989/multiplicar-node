//requireds
// const fs = require('fs') //Required de proyecto propio de Node
// const fs = required('express') //Expansiones de Node (echos por terceros)
// const fs = required('./nombre_archivo') //Archivos hechos por nosotros
// const multiplicar = require('./multiplicar/multiplicar')



// Importar pero con destructuracion, ósea importar los objetos exportados
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
// const colors = require('colors');
var colors = require('colors/safe');


// console.log(module);

// console.log(multiplicar);
// multiplicar.crearArchivo

// let base = 5;
// let data = ''
// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base*i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} ha sido creado!`);
// });


//*********************Mi INTENTO *************************
// let crearArchivo = async(base) => {
//     let data = ''
//     for (let i = 1; i <= 10; i++) {
//         data += `${base} * ${i} = ${base*i}\n`;
//     }

//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw new Error;
//         return `tabla-${base}.txt`;
//     });
// }

//Recibir argumentos desde la consola
// console.log(process.argv);

// let argv2 = process.argv

// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(argv.base);
// console.log(`limite ${argv.limite}`);
// console.log(argv2);

// console.log(argv);

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(e => console.log(e))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}
//console.log(base);