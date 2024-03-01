const Comment = require("../models/comment");

const handleAddComment = async (req, res) => {
  try {
    const { comment, blogId } = req.body || {};
    if (!comment || !blogId) {
      return res.status(400).json({ error: "Bad Request1" });
    }
    const commentResult = Comment.create({
      comment,
      blogId,
      createdBy: req.user._id,
    });
    return res
      .status(201)
      .json({ message: "Comment Added", commentId: commentResult._id });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  handleAddComment,
};
