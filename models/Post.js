const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    body: String,
    userId: {
      type: String,
      ref: "User",
    },
    datePosted: Date,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;