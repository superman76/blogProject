var express = require('express');

var router = express.Router();

var Blog = require('../models/blog');


router.route('/blogs')
	.post(function(req, res) {

	var blog = new Blog();
	// bear.name = req.body.name;
	// bear.age = req.body.age;
	// bear.gender = req.body.gender;
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
		Blog.findById(req.params.blog_id, function(err, bear){
		  if(err){
		  	console.log(err)
		  } else {
		  	// bear.name = req.body.name ? req.body.name : bear.name;
		  	// bear.age = req.body.age ? req.body.age : bear.age;
		  	// bear.gender = req.body.gender ? req.body.gender : bear.gender;
		  	
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