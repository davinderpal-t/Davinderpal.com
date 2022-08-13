const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

app.get("/stuff", (req, res) => {
    res.json({
        "Name": "Dav",
        "Age": "18",
        "Favorite Series": "Pokemon"
    });
});

module.exports = app;