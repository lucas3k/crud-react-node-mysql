require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: process.env.APP_HOST_DB,
  user: process.env.APP_USER_DB,
  password: process.env.APP_PASSWORD_DB,
  database: process.env.APP_DATABASE_DB,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("<h1>oi meu chapa</h1>");
});

app.get("/register", (req, res) => {
  const SQL =
    "INSERT INTO produtos (nome, preco, descricao) VALUES ('Carrinho Esportivo', '32.44', 'Carrinho de brinquedo esportivo com várias cores legais')";

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("tudo ok");
    }
  });
});

app.listen(process.env.APP_PORT, () =>
  console.log(
    `server status 200 in ${process.env.APP_ADDRESS}:${process.env.APP_PORT}`
  )
);
