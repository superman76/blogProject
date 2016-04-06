console.log('hello world');

// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// function deleteBlog (event) {
// 	event.preventDefault();

// 	var $button = $(event.target)  

// 	var id = $button.data("id");  
	

// 	console.log("Blog has been deleted: " + id)

// 	$.ajax("/api/blog/" + id, {method: "DELETE"}).done(function() {
// 		$button.closest('tr').remove();
// 	});
// }

// var addBlog = function(event){
// 	event.preventDefault();

// 	var author = $('#author').val();
// 	var post = $('#blogPost').val();
// 	var $table = $('#blogTable')

// 	var blog = {};
// 	blog.author = author;
// 	blog.blogPost = blogPost;

// // how to throw this (lines 25-28) to the server

// 	$.ajax({
// 		url: "/api/blog",
// 		method: "POST",
// 		data: blog
// 	}).done(function(data) {
// 	  console.log("I posted a blog", data);

// 	  $table.append('<tr data-id=' + data._id + '>\
// 				  	<td>' + data.author + '</td>\
// 				  	<td>' + data.blogPost + '</td>\
// 				  	<td><button data-id="<%= blogs[i].id %>" class="btn btn-warning deleteblog" type="button">\
// 				  			Delete\
// 				  		</button>\
// 				  	</td>\
// 				  </tr>');
// 	  $("#author").val('');
// 	  $("#blogPost").val('');
// })

// 	// alert('you clicked the add blog button');
// }

// $('#addBlog').on('click', addBlog);
// $('.deleteBlog').on('click', deleteBlog);
// // This is an event subscription.  Anything with the class .deleteblog
// // when it is clicked
// // Challenge to compare new names against existing and not accept
// // duplicates


// console.log($('#blogTable tr td:first-child').toArray());

// var blogNameArray = $('#blogTable tr td:first-child').toArray();



