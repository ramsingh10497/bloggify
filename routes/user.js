const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const {
  handleSignup,
  handleSignin,
  handleLogout,
} = require("../controllers/user");

router.post("/signup", handleSignup);

router.post("/signin", handleSignin);

router.get("/logout", handleLogout);

module.exports = router;
