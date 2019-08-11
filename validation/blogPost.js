const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateBlogPostInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : "";
    data.blogPost = !isEmpty(data.content) ? data.content : "";

    if (Validator.isEmpty(data.title)) {
        errors.title = "Title field is required";
    }

    if (Validator.isEmpty(data.blogPost)) {
        errors.blogPost = "Content field is required";
    }

    if (Validator.isLength(data.content, { min: 100 })) {
        errors.content = "Post must be at least 100 characters"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};