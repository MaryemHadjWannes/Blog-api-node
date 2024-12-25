const express = require('express');
const Comment = require('../models/comment');
const Post = require('../models/post');
const authMiddleware = require('../middleware/auth'); // Authentication middleware
const router = express.Router();

// Create Comment
router.post('/create/:postId', authMiddleware, async (req, res) => {
  const { content } = req.body;
  const postId = req.params.postId;

  console.log('Post ID:', postId); // Ensure the postId is being passed correctly
  console.log('User:', req.user); // Ensure user is correctly passed through auth middleware

  // Access the userId properly from the JWT payload
  const userId = req.user.userId; // Correctly access userId

  if (!userId) {
    return res.status(400).send('User ID is required');
  }

  console.log('User ID:', userId); // Verify that the user ID is correct


  try {
    // Find the post by ID
    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    // Create a new comment
    const comment = new Comment({
      content,
      author: userId, // Use the correct field here
      post: postId,  // Link comment to the post
    });

    // Save the comment
    await comment.save();

    // Add the comment's ID to the post's comments array
    post.comments.push(comment._id);
    await post.save();

    // Return the comment as a response
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
