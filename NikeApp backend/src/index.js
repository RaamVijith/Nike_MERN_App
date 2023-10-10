const express = require('express');
const productRoutes = require('./router/productRouters');

const app = express();
const PORT = 3000;

app.use('/products', productRoutes);

app.get('/', (req,res) => {
    res.send('<h2> hello world</h2>');
});

app.listen(PORT, () => {
    console.log('API is listning on port', PORT)
});