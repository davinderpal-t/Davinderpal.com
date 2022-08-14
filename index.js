const express = require("express");
const app = express();

let x = 0;

app.use(express.static("public"));
app.get('/api', (req, res) => {
    x++;
    res.setHeader('Content-Type', 'text/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json({
        "status": x
    });
});