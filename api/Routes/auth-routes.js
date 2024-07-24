const express = require("express");
const { getListings} = require("../Controller/listings-controller");
const { getautocomplete } = require("../Controller/autocomplete");
const router = express.Router();

router.get("/listings", getListings);
router.get("/autocomplete",getautocomplete)

module.exports = router;