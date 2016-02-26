console.log("hello world");

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Blog = require('./models/blog');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blogposts');

var blogRouter = require('./routes/blogs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));


app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index', {title: "Charlie's Blog"})
});

app.get('/about', function(req, res){
	var data ={};
	data.title = 'ABOUT PAGE';
	data.name = 'Charles Blood';
	data.time = new Date();
	res.render('about', data);
});

app.get('/blogs', function(req, res){
	Blog.find(function(err, blogs){
		if(err) {
			console.log(err);
		} else {
			res.render('blogs', { blogs: blogs } );
		}
	})
});

var port = process.env.PORT || 8100;
var router = express.Router();

router.use(function(req, res, next) {
	console.log('there is something happening here');
	next();
});

router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our API!'});
});

app.use('/api', blogRouter);

app.listen(port);
console.log('⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡\n⚡⚡⚡⚡ Magic happens on port' + port + ' ⚡⚡⚡⚡\n⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡');