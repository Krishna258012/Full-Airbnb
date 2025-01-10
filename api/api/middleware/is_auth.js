const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAuthincated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(404)
        .send({ message: "Authientication Failed Please Login Again123" });
    } else {
      const jwtPayload = jwt.verify(
        token,
        process.env.SecertKey,
        (err, payload) => {
          if (err) {
            return res.status(404).send({ message: "Invalid Token" });
          } else {
            req.deatils = payload;
            next();
          }
        }
      );
    }
  } catch (error) {
    return res.status(400).send({ message: "Internal Server Error", error });
  }
};

module.exports = isAuthincated;
