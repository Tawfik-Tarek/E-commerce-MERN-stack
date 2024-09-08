const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");


const isAuthorized = require("../middlewares/isAuthorized");
const isAdmin = require("../middlewares/isAdmin");
const canDelete = require("../middlewares/canDelete");

router
  .route("/")
  .get(isAuthorized, isAdmin, getUsers)
  .post(createUser);
router
  .route("/:id")
  .get(isAuthorized , getUserById)
  .put(isAuthorized , updateUser)
  .delete(isAuthorized, canDelete, deleteUser);

module.exports = router;