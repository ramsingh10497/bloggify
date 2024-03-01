const Blog = require("../models/blog");

const handleAddBlog = async (req, res) => {
  try {
    const { title, body } = req.body || {};
    if (!title || !body || !req?.file) {
      return res.status(400).json({ error: "Bad Request" });
    }
    const blog = await Blog.create({
      title,
      body,
      coverImageURL: `uploads/${req.file?.filename}`,
      createdABy: req.user._id,
    });
    return res.status(201).json({ message: "Blog Cretaed", BlogId: blog?._id });
  } catch (error) {
    return res.status(400).json({ error: "Bad Request" });
  }
};

module.exports = {
  handleAddBlog,
};
