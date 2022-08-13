const express = require("express");
const app = express();
//const product = require("./product");

//app.use(express.json({ extended: false }));

//app.use("/api/product", product);
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json({
        "status": "sus"
    });
});

module.exports = app;