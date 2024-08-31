const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Subdomain takeover for Bug Bounty Report");
});

app.listen(process.env.PORT || 5000);
