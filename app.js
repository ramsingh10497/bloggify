const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/user");
const connectDB = require("./config/db");

const port = 8000;
const app = express();

// Connect MongoDB
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/user", userRoute);

app.listen(port, (err, res) => {
  if (err) {
    console.log(`error on listen: ${err}`);
  }
  console.log(`Server started at ${port}`);
});
