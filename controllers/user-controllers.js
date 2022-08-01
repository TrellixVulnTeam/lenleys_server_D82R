const { User } = require("../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const getUserList = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(200).send(userList);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const foundUser = await User.findOne({
      where: {
        id,
      },
    });
    if (foundUser) {
      await User.destroy({
        where: {
          id,
        },
      });
      res.status(201).send(`Delete success user with id: ${id}`);
    } else {
      res.status(404).send("User Not Found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const Register = async (req, res) => {
  try {
    const { firstName, lastName, type, address, email, phoneNumber, password } =
      req.body;
    // * 1: Check user is already exists or not
    const oldUser = await User.findOne({
      where: {
        email,
      },
    });

    if (oldUser) {
      res.status(404).send(`User is already exists!`);
    } else {
      const newUser = {
        firstName,
        lastName,
        type,
        address,
        email,
        phoneNumber,
        password,
      };
      await User.create(newUser);
      res.status(200).send(newUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // * Check user'email,password is correct or not
    const foundUser = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!foundUser) {
      // ! If in-correct -> send message
      res.status(400).send("Email and or Password is wrong! Please try again!");
    } else {
      // ? If correct ->  create token -> send to client side
      const jwtSerectKey = process.env.JWT_TOKEN_SECRET_KEY;
      const tokenData = {
        id: foundUser.id,
        email: foundUser.email,
      };
      const token = jwt.sign(tokenData, jwtSerectKey);
      const currentUser = {
        id: foundUser.id,
        email: foundUser.email,
        token,
      };
      res.status(200).send(currentUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  Register,
  Login,
  getUserList,
  deleteUserByID,
};
