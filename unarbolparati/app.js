const express = require('express');
const app = express();

const path = require('path');

app.use(express.static('public'));

app.listen(3030, () => {
    console.log("Servidor listo en puerto 3030");
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
});