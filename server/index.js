require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("<h1>oi meu chapa</h1>");
});

app.listen(process.env.APP_PORT, () =>
  console.log(
    `server status 200 in ${process.env.APP_ADDRESS}:${process.env.APP_PORT}`
  )
);
