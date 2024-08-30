const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Subdomain takeover of Zircuit Assets");
});

app.listen(process.env.PORT || 5000);
