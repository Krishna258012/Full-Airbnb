require("dotenv").config();
const express = require("express");
const connection = require("./Db");
const cors = require("cors");
const app = express();
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 3000;

app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     headers: ['Content-Type']
//   }));
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookie());
console.log("testing");
app.use("/api", require("./Routes/normal_data"));
app.use("/api/auth", require("./Routes/auth_routes"));

app.get("/", (req, res) => {
  res.send("heelo");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("ERror Happened" + err);
  } else {
    console.log("Server Started Successfully");
  }
});
