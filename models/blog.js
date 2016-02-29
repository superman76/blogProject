var mongoose = require('mongoose');
// 
var Schema = mongoose.Schema;
// 
var BlogSchema = new Schema({
	Author: String,
	blogPost: String

});
module.exports = mongoose.model('Blog', BlogSchema);

// code below is from models/bear.js
// var mongoose = require('mongoose');
// // 
// var Schema = mongoose.Schema;
// // 
// var BearSchema = new Schema({
// 	name: String,
// 	age: Number,
// 	gender: String
// });
// // line 5 calling a constructor function.  items in the curly brace
// // an object.
// module.exports = mongoose.model('Bear', BearSchema);