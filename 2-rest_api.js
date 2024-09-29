const express = require('express');
const app = express();

app.use(express.json());

const products = [
    { id: 1, label: 'Product 1', description: 'This is our first product', price: 100 },
    { id: 2, label: 'Product 2', description: 'This is our second product', price: 50 }
];

app.get('/products', (_, res) => {
    res.send(products);
});

app.post('/products', (req, res) => {
    const product = {
        id: products.length + 1,
        label: req.body.label,
        description: req.body.description,
        price: req.body.price
    };
    products.push(product);
    res.status(201).send(product);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});

app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    product.label = req.body.label;
    product.description = req.body.description;
    product.price = req.body.price;
    res.send(product);
});

app.delete('/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');
    products.splice(productIndex, 1);
    res.send('Product deleted');
});

app.listen(3000, () => {
    console.log('API started on port 3000');
});

module.exports = app;