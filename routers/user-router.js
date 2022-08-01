const express = require("express");
const userRouter = express.Router();
const {
  Register,
  Login,
  getUserList,
  deleteUserByID,
} = require("../controllers/user-controllers");
userRouter.get("/", getUserList);
userRouter.get("/:id", deleteUserByID);
userRouter.post("/register", Register);
userRouter.post("/login", Login);
module.exports = {
  userRouter,
};
