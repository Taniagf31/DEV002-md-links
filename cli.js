#!/usr/bin/env node
const mdLinks = require("./mdLinks"); // se importa la función mdLinks
const process = require("process");


const path2 = process.argv[2];
const pathOptions1 = process.argv[3];
const pathOptions2 = process.argv[4];
 //Se crea un arreglo que contiene las opciones que se van a aplicar al análisis


mdLinks(path2, [pathOptions1, pathOptions2]);
// .then(res => console.log(res))
// .catch(error => console.log(error));

module.exports = mdLinks;

//linea 1 ejecutable de node
//manejar los argumentos de la terminal
//argv  un analizador de argumentos de línea de comandos simple para NodeJS. Para un analizador CLI con más funciones 





