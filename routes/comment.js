const { Router } = require("express");
const router = Router();
const { checkForAuthenticationCookies } = require("../middlewares/auth");
const { handleAddComment } = require("../controllers/comment");

router.post("/", checkForAuthenticationCookies, handleAddComment);

module.exports = router;
