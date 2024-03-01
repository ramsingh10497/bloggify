const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const { handleAddBlog } = require("../controllers/blog");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(`./public/uploads`));
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), handleAddBlog);

module.exports = router;
