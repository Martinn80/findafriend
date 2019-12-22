const express = require("express");
const router = express.Router();



router.get("/", (req, res) => {
    console.log("We been hit");
    res.send("success");
});

module.exports = router;