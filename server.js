const express = require("express");
const app = express();
const stuff = require("./api/stuff");
const PORT = process.env.PORT || 5050;

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get("/stuff", stuff);

app.listen(PORT, () => {
    console.log("Listening at: " + PORT);
});

module.exports = app;