const AuthModel = require("../Model/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        message: "All Fields Are Mandotary",
      });
    } else {
      const EmailFind = await AuthModel.findOne({ email });
      if (EmailFind) {
        return res.status(400).send({
          message: "Email Already Registerd",
        });
      }

      {
        const Salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(password, Salt);
        const newUser = new AuthModel({
          name,
          email,
          password: hashpass,
        });
        await newUser.save();
        return res.status(201).send({
          message: `${name} registerd Successfully`,
        });
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        message: "All Fields Are Mandotary",
      });
    } else {
      const EmailFind = await AuthModel.findOne({ email });
      if (!EmailFind) {
        return res.status(400).send({
          message: "Email is Not Registerd",
        });
      } else {
        const comparepass = await bcrypt.compare(password, EmailFind.password);
        const payload = {
          id: EmailFind._id,
          name: EmailFind.name,
        };
        if (comparepass) {
          const jwtToken = jwt.sign(payload, process.env.SecertKey);
          res.cookie("token", jwtToken, {
            maxAge: 1 * 60 * 60 * 1000
          });
          return res
            .status(200)
            .send({ message: `${EmailFind.name} login SuccessFully` });
        } else {
          return res.status(200).send({ message: "Invalid Password" });
        }
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { register, login };
