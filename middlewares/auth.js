const { validateToken } = require("../services/auth");

function checkForAuthenticationCookies(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) next();

    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
    } catch (error) {}
    next();
  };
}

module.exports = {
  checkForAuthenticationCookies,
};
