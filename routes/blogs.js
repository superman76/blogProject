var express = require('express');

var router = express.Router();

var Blog = require('../models/blog');


router.route('/blogs')
	.post(function(req, res) {

	var blog = new Blog();
	blog.author = req.body.author;
	blog.blogPost = req.body.blogPost;
// these are pulling it from the request(or the form, or postman)
	blog.save(function(err, blog) {
			if(err) {
				return blog.alert('??????????????');
			} else {
				res.json(blog)
			}
		})
	})

	.get(function(req, res) {
		Blog.find(function(err, blogs){
			if(err) {
				console.log(err)
			} else {
				res.json(blogs)
			}
		})
	});
router.route('/blogs/:blog_id')

	.get(function(req, res){
		Blog.findById(req.params.blog_id, function(err, blog) {
			if(err){
				console.log(err);
			} else {
				res.json(blog);
			}
		})
	})
	.put(function(req, res){
		Blog.findById(req.params.blog_id, function(err, blog){
		  if(err){
		  	console.log(err)
		  } else {
		  	// blog.author = req.body.author ? req.body.author : blog.author;
		  	// blog.blogPost = req.body.blogPost ? req.body.blogPost : blog.blogPost;
		  	
		  	blog.save(function(err){
		  		if(err){
		  			console.log(err)
		  		} else {
		  			res.json({title: "blog updated"});
		  		}
		  	})
		  }
		})
	})
	.delete(function(req, res){
		Blog.remove({_id: req.params.blog_id}, function(err, blog){
			if(err){
				console.log(err)
			} else {
				res.json({title: "blog deleted"});
			}
		})
	})


module.exports = router;