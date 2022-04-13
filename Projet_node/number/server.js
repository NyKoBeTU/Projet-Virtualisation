const express = require("express");
const numberApp = express();

const port = process.env.PORT || 3000;
numberApp.use(express.json());

numberApp.get("/generate", (req, res) => {
    var number = Math.floor(Math.random() * (req.query.max - req.query.min + 1)) + parseInt(req.query.min);
    res.json({ number: number});
});

numberApp.listen(port, () => {
    console.log(`Number service, running on port ${port}`);
});