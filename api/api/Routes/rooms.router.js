const express = require("express");
const router = express.Router();
const { rooms } = require("../Controller/rooms.controller");

router.get('/rooms/:roomId', rooms);

module.exports = router;
