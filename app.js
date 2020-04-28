// Mes importation

const express = require("express");
const router = require("./routers/router");
const bodyparser = require("body-parser");

const app = express();
const port = 5000;

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

app.use("/api", router);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
