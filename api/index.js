require('dotenv').config();
const express = require("express");
const connection = require("./Controller/Db");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     headers: ['Content-Type']
//   }));

app.use(cors());

app.use("/api",require("./Routes/auth-routes"))

app.get("/",(req,res)=>{
    res.send("heelo")
})

app.listen(PORT,(err)=>{
    if (err) {
        console.log("ERror Happened" + err);
    } else {
        console.log("Server Started Successfully");
    }
})