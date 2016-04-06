var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Comment = require('../models/comment');
var Post = require('../models/post');



router.route('/posts')
  .get(function(req, res){
    
    Post.find()
    .populate('author')
    .populate('comments')
    .exec(function(err, posts){
      if(err){
        console.log(err)
      } else {
        res.json(posts)
      }
    })
  })
  .post(function(req, res){

    var post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.author = req.body.author || 'charles';

    console.log(post.author);

    post.save(function(err, post){
      if(err){
        console.log(err)
      } else {
        res.json(post)
      }
    })
  });

router.route('/posts/:post_id')
  .get(function(req, res){
    Post.findById(req.params.post_id, function(err, post){
      if(err){
        console.log(err)
      } else {
        res.json(post)
      }
    })
  })
  .delete(function(req, res){
    Post.remove({_id: req.params.post_id}, function(err){
      if(err){
        console.log(err)
      } else {
        res.json({message: 'post deleted'})
      }
    })
  })

router.route('/posts/:post_id/comment')
  .post(function(req, res){
    
    // Create a new comment
    // use blog id & user id

    var comment = new Comment()
    comment.body = req.body.body;
    comment.user = '56d4bce18930d5e034f7b052';
    comment.blog = req.params.post_id;

    comment.save(function(err, com){
      if(err){
        res.send(err)
      } else {
        // find blog by id
        

        Post.findByID(req.params.post_id, function(err, com){
          if(err){
            res.send(err)
          } else {
           // push comment into comments array
          post.comments.push(com._id);
          post.save();
          res.json(com);
           //test this in postman with id 
          }
        })
      }
    })
  })



  //   var post = new Post();
  //   post.title = req.body.title;
  //   post.content = req.body.content;
  //   post.image = req.body.image;
  //   post.author = req.body.author || 'charles';

  //   post.save(function(err, post){
  //     if(err){
  //       console.log(err)
  //     } else {
  //       res.json(post)
  //     }
  //   })
  // });



module.exports = router;