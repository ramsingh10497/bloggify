const { validateToken } = require("../services/auth");

function checkForAuthenticationCookies(req, res, next) {
  const cookie = req.cookies?.token;
  if (!cookie) return res.status(400).json({ message: "cookie not found" });
  try {
    const userPayload = validateToken(cookie);
    req.user = userPayload;
  } catch (error) {}
  return next();
}

module.exports = {
  checkForAuthenticationCookies,
};
