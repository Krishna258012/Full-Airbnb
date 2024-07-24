const mongoose = require("mongoose");

const Dburl = process.env.MONGO;

const connection = mongoose.connect(Dburl)
.then((res)=>{console.log("Database Connected Successfully")})
.catch((err)=>{console.log("Datatbase Error " + err.message);})

module.exports = connection;