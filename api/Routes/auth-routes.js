const express = require("express");
const { getListings } = require("../Controller/listings-controller");
const router = express.Router();

router.get("/listings", getListings);

module.exports = router;