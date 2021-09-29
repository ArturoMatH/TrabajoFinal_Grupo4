module.exports = app => {
    app.get('/api/collection/GetCollection', (req, res) => {
        var data = require('../json/collections.json');
        res.json(data);
    })

    app.get('/api/producto/GetProductos', (req, res) => {
        var data = require('../json/producto.json');
        res.json(data);
    })
}