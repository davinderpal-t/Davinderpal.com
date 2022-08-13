const express = require("express");
const app = express();
//const product = require("./product");

//app.use(express.json({ extended: false }));

//app.use("/api/product", product);
app.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Get data has successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server error");
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Listening at: http://localhost:" + PORT);
});

module.exports = app;