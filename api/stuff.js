const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        "Name": "Dav",
        "Age": "18",
        "Favorite Series": "Pokemon"
    });
});

module.exports = router;