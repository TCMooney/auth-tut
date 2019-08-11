const express = require('express');
const router = express.Router();
const jwt = reqiure('jsonwebtoken');
const keys = require('../../config/keys');

const validateBlogPostInput = require('../../validation/blogPost');
const blogPost = require('../../models/blogPostModel');

router.post('/post', (req, res) => {
    const { errors, isValid } = validateBlogPostInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors)
    }
})