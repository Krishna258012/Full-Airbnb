const express = require("express");
const isAuthincated = require("../middleware/is_auth");
const protectrouter = express.Router();
const profile = require("../Controller/profile.controller");

protectrouter.use(isAuthincated);

protectrouter.get("/profile", profile.userProfile);

module.exports = protectrouter;
