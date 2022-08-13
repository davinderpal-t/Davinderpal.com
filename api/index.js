const express = require("express");
const app = express();
//const product = require("./product");

//app.use(express.json({ extended: false }));

//app.use("/api/product", product);
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(`Hello! Go to item: <a href=""></a>`);
});

module.exports = app;