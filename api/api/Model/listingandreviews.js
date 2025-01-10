const mongoose = require("mongoose");


const listings = new mongoose.Schema({
    _id:String
}, {
  collection: "listingsAndReviews",
  strict: false,
});

const listing = mongoose.model("listingsAndReviews", listings);
module.exports = listing;