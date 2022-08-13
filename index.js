const express = require("express");
const app = express();
const product = require("./api/product");

//app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Listening at: http://localhost:" + PORT);
});