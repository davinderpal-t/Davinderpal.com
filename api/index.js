const express = require("express");
const app = express();

app.use(express.static("../public"));
app.get('/api', (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.json({
        "status": "sus"
    });
});

module.exports = app;