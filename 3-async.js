const app = require('./2-rest_api');

async function fetchProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 1, label: 'Product 1', description: 'This is our first product', price: 100 },
                { id: 2, label: 'Product 2', description: 'This is our second product', price: 50 }
            ]);
        }, 1000);
    });
};

app.get('/async-products', async (_, res) => {
    try {
        const products = await fetchProducts();
        res.send(products);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    };
});

module.exports = app;