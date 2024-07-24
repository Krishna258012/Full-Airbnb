const mongoose= require("mongoose");
const listing = require("../Model/listingandreviews");


const getautocomplete = async (req,res) =>{
    const query = req.query.destination;
    if (!query) {
      return res.json([]);
    }
    try {
      const regex = new RegExp(query, 'i'); // Case-insensitive regex

      const results = await listing.aggregate([
        { $match: { 'address.street': regex } }, // Match the regex
        { $group: { _id: '$address.street' } }, // Group by street to ensure uniqueness
        { $sort: { _id: 1 } },
        { $limit: 10 }, // Limit the number of results
        { $project: { _id: 0, 'address.street': '$_id' } } // Project the desired format
      ]);
  
      // console.log(`Results: ${JSON.stringify(results)}`);


      // const results = await listing.distinct('address.street', { 'address.street': regex }).limit(25).select('address.street -_id');
        return res.status(200).send(results)
    }
    catch{
        res.status(404).send("not found")
    }
  }

  module.exports = {getautocomplete}