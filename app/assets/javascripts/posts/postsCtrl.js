angular.module('flapperNews')
.controller('PostsCtrl', [
'postsFactory', 'post',
function(postsFactory, post){
  var self = this;
  self.post = post;
  

  self.addComment = function(){
  if(self.body === '') { return; }
  	postsFactory.addComment(post.id, {
	    body: self.body,
	    author: 'user',
  	}).success(function(comment) {
	    self.post.comments.push(comment);
  	});
  		self.body = '';	
	};
	
	self.incrementUpvotes = function(comment){
			postsFactory.upvoteComment(self.post, comment);
	};	
}])
