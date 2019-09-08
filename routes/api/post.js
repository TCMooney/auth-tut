const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

const validateBlogPostInput = require('../../validation/blogPost');
const BlogPost = require('../../models/blogPostModel');
const User = require('../../models/userModel');


router.put('/new-blog:id', (req, res) => {
    
    const { errors, isValid } = validateBlogPostInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
    User.findByIdAndUpdate(req._id, req.body, {new: true}, (err, post) => {
        if (err){
            return res.status(500).send(err)
        } else {
            const newBlog = new BlogPost({
                title: req.body.title,
                content: req.body.content,
                tags: req.body.tags
            })
            newBlog.save()
                .then(blog => res.json(blog))
                .catch(err => console.log(err))
            console.log(newBlog)  
        }
    })
})

module.exports = router;