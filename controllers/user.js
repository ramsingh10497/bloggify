const User = require("../models/user");

const handleSignup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password)
      return res
        .status(400)
        .json({ error: "Invalid username or password or email" });
    await User.create({ fullName, email, password });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    return res.status(400).json({ error: error?.message ?? error });
  }
};

const handleSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ error: "please enter the valid credentials" });

    await User.matchPassword(email, password);
    return res.status(200).json({ message: "User Loggedin successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message ?? error });
  }
};

module.exports = {
  handleSignup,
  handleSignin,
};
