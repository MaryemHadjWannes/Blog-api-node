const express = require('express');
const Post = require('../models/post');
const authMiddleware = require('../middleware/auth'); // Authentication middleware
const router = express.Router();

// Create Post

router.post('/create', authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    
    // Access the userId properly from the JWT payload
    const userId = req.user.userId; // Correctly access userId
  
    if (!userId) {
      return res.status(400).send('User ID is required');
    }
  
    console.log('User ID:', userId); // Verify that the user ID is correct
  
    const post = new Post({
      title,
      content,
      author: userId // Use the correct field here
    });
  
    try {
      await post.save();
      res.status(201).send(post);
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  });

// Get Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username').populate('comments');
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
