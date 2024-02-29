const { Router } = require("express");
const User = require("../models/user");
const { handleSignup, handleSignin } = require("../controllers/user");

const router = Router();

router.post("/signup", handleSignup);

router.post("/signin", handleSignin);

module.exports = router;
