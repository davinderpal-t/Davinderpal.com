const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get("/stuff", (req, res) => {
    res.json({
        "Name": "Dav",
        "Age": "18",
        "Favorite Series": "Pokemon"
    });
});

app.listen(PORT, () => {
    console.log("Listening at: " + PORT);
});

module.exports = app;