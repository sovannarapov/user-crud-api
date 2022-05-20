const express = require("express");
const {
  getUsers,
  createUser,
  getUserDetail,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const router = express.Router();

router
  .get("/", getUsers)
  .post("/", createUser)
  .get("/:id", getUserDetail)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
