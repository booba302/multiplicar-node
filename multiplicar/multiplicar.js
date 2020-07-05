const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-limite-${limite}.txt`.green)
            }
        });
    })
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}