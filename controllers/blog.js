const Blog = require("../models/blog");
const Comment = require("../models/comment");

const handleAddBlog = async (req, res) => {
  try {
    const { title, body } = req.body || {};
    if (!title || !body || !req?.file) {
      return res.status(400).json({ error: "Bad Request1" });
    }
    const blog = await Blog.create({
      title,
      body,
      coverImageURL: `uploads/${req.file?.filename}`,
      createdBy: req.user._id,
    });
    return res.status(201).json({ message: "Blog Cretaed", BlogId: blog?._id });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const handleGetBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const blog = await Blog.findOne({ _id: blogId });
    const comments = await Comment.find({ blogId }).populate("createdBy");
    res.json({ blog, comments });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const handleGetMyBlog = async (req, res) => {
  try {
    const blogs = await Blog.find({ createdBy: req.user._id });
    res.json({ allBlogs: blogs });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  handleAddBlog,
  handleGetBlog,
  handleGetMyBlog,
};
