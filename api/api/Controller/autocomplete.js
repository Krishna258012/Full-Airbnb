const mongoose = require("mongoose");
const listing = require("../Model/listingandreviews");

const getautocomplete = async (req, res) => {
  const query = req.query.destination;
  if (!query) {
    return res.json([]);
  }

  try {
    const regex = new RegExp(query, "i"); // Case-insensitive regex

    const results = await listing.aggregate([
      {
        $facet: {
          countries: [
            { $match: { "address.country": regex } },
            { $group: { _id: "$address.country" } },
            { $sort: { _id: 1 } },
            { $limit: 10 },
            { $project: { _id: 0, value: "$_id", type: { $literal: "country" } } }
          ],
          streets: [
            { $match: { "address.street": regex } },
            { $group: { _id: "$address.street" } },
            { $sort: { _id: 1 } },
            { $limit: 10 },
            { $project: { _id: 0, value: "$_id", type: { $literal: "street" } } }
          ]
        }
      },
      {
        $project: {
          results: { $concatArrays: ["$countries", "$streets"] }
        }
      }
    ]);

    const autocompleteResults = results.length > 0 ? results[0].results : [];

    return res.status(200).send(autocompleteResults);
  } catch (err) {
    console.error("Error in autocomplete:", err);
    res.status(500).send("Internal server error");
  }
};

module.exports = { getautocomplete };
