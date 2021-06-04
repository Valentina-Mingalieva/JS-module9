// 2. Create registration and authorization API.
// Saving credentials in file.
// Add 404 error.

const express = require("express");
const { saveCreds, readCreds } = require("./tast-2-storage");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// для обработки json, чтобы express создал объект
app.post("/register", (req, res) => {
    const { login, password } = req.body;
    saveCreds(login, password);
    res.send("ready");
});

// возвращает true или false
app.post("/auth", (req, res) => {
    const { login, password } = req.body;
    const creds = readCreds();
    res.send(login === creds.login && password === creds.password);
});

app.get("*", function (req, res) {
    res.status(404).send("not found");
});

app.listen(3000);

module.exports = app;