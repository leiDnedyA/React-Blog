const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    console.log('server pinged?!')
    res.json({ message: "Hello from server!" });
});
