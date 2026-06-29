const express = require("express");

const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/authController");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

router.get("/me", authMiddleware, getCurrentUser);

//temporary start

//temporary end
router.post("/register", register);
router.post("/login", login);
router.get("/me", getCurrentUser);

module.exports = router;
