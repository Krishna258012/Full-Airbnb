const mongoose = require("mongoose");

const Dburl = "mongodb+srv://informerkrishna:123456789kK$@cluster0.vz8dndj.mongodb.net/sample_airbnb?retryWrites=true&w=majority&appName=Cluster0";

const connection = mongoose.connect(Dburl)
.then((res)=>{console.log("Database Connected Successfully")})
.catch((err)=>{console.log("Datatbase Error " + err.message);})

module.exports = connection;