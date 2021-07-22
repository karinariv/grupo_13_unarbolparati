const fs = require('fs');
const path = require('path');


const productosFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));