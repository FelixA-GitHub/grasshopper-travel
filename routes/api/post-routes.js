const router = require('express').Router();
const sequelize = require('../../config/connection');
//gives us info about not only each post, but also the user that posted it
//with the foreign key we can perform a JOIN
const { Post, User, Description } = require('../../models');

// get all users

// get user by id

// create new post

// put/update post

// delete a post

module.exports = router;