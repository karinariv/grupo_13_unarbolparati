
/* Aquí importamos el JSON de listaProductos*/
const fs = require('fs');
let listProd = fs.readFileSync('../data.json', 'utf-8');

listProd = JSON.parse(listProd);
console.log(listProd);


//Exportamos el módulo creado en este controlador


