const express = require("express");
const isAuthincated = require("../middleware/is_auth");
const protectrouter = express.Router();

protectrouter.use(isAuthincated);

protectrouter.get("/profile", (req, res) => {
  res.send({ message: "Jwt Verified", Deatils: req.deatils });
});

module.exports = protectrouter;
