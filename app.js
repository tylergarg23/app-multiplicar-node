// requireds
//const fs = require('fs');
//const fs = require('express');
//const fs = require('./fs');

const argv = require('./config/yargs').argv;




const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//let base = '5';

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}


//console.log('Limite', argv.limite);
//console.log(argv2);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);

//console.log(module);