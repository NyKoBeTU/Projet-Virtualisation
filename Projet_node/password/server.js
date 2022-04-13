const express = require("express");
const passwordApp = express();

const port = process.env.PORT || 3000;
passwordApp.use(express.json());

passwordApp.get("/generate", (req, res) => {
    var randPassword = Array(parseInt(req.query.pLength)).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function(x) {
        return x[Math.floor(Math.random() * x.length)];
    }).join("");
    res.json({ password: randPassword });
});

passwordApp.listen(port, () => {
    console.log(`Password service, running on port ${port}`);
});