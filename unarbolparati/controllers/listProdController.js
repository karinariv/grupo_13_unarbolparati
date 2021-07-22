
/* Aquí importamos el JSON de listaProductos*/

const fs = require('fs');
let listProd = fs.readFileSync('./data.json', 'utf-8');

listProd = JSON.parse(listProd);
console.log(listProd.listaProductos.length);


// Acá nos falta un objeto literal con las acciones para cada ruta

const lPcontrolador = {
    listProd: (req, res) => {
        let id = req.params.id;

        return res.render('./products/listProd', {listProd});
    },
    simplyProducts: (req, res) => {
        res.render('./products/productos', {listProd});
    }
}
// Acá exportamos el resultado
module.exports = lPcontrolador;




