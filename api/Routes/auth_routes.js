const express = require("express");
const { login, register } = require("../Controller/auth_cont");
const authrouter = express.Router();

authrouter.post("/login",login)
authrouter.post("/register",register);

module.exports = authrouter;