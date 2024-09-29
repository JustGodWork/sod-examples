const app = require('./3-async');

app.use((req, _, next) => {
    console.log(`${req.url} ${req.method}`);
    next();
});

app.get('/middleware-demo', (_, res) => {
    res.send('Middleware demo completed');
});

module.exports = app;