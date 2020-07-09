const fetch = require("node-fetch");

const express = require("express");
const app = express();

const handler = async function (req, res) {
  console.log(req.params);
  const response = await fetch(req.params[0]);
  const text = await response.text();

  res.type("application/xml");
  res.send(text);
};

const route = /^\/(.+)/;
app.get(route, handler);
app.post(route, handler);

app.listen(process.env.PORT || 3000);
