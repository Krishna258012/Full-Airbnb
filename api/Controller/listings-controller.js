const listing = require("../Model/listingandreviews");
const mongoose = require("mongoose");

const getListings = async (req, res) => {
  // const address = req.query.address;
  // const country = req.query.country;
  const {street, country , price, name} = req.query;
  // console.log("Parsed Price:", price);

  let queryObjFilter = {};
  if (street) {
    queryObjFilter['address.street']= { $regex: `\\b${street}\\b`, $options: "i" }; // Case-insensitive search
  }

  if (country) {
    queryObjFilter['address.country'] = { $regex: country, $options: "i" }; // Case-insensitive search
  }

  if (price) {
    queryObjFilter['price.$numberDecimal'] = (price);
  }


  if(name){
    queryObjFilter.name = {$regex: name , $options: "i"};
  }
  // console.log("Query Object Filter: ", queryObjFilter);
  try {
    const data = await listing.find().select('_id name images  price').limit(15);
    return res
      .status(200)
      .send({ message: "Data Fetched Successfully", data: data });
  } catch (err) {
    // console.error("Error Retrieving Data: ", err.message);
  } finally {
    // Close the Mongoose connection after fetching data
    // mongoose.connection.close();
  }
};



module.exports = { getListings};
