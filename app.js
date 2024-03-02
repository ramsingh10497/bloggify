const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const commentRoute = require("./routes/comment");

const connectDB = require("./config/db");
const { checkForAuthenticationCookies } = require("./middlewares/auth");

const port = process.env.PORT || 8000;
const app = express();

// Connect MongoDB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Routes
app.use("/user", userRoute);
app.use("/blog", checkForAuthenticationCookies, blogRoute);
app.use("/comment", checkForAuthenticationCookies, commentRoute);

app.listen(port, (err, res) => {
  if (err) {
    console.log(`error on listen: ${err}`);
  }
  console.log(`Server started at ${port}`);
});
