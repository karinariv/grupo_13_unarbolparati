const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Productos listados sin detalle solo nombre');
})

router.get('/detalle/:id', (req, res) => {
    res.send('Detalle del producto ' + req.params.id )
})

/* Kari*/


















/* Dani */








module.exports = router;