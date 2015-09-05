angular.module('flapperNews')
.controller('MainCtrl', ['postsFactory',function(postsFactory){
  var self = this;
  
  

  self.posts = [];
  self.posts = postsFactory.posts;
  
  
  
  self.addPost = function(){
    if(!this.title || this.title === '') { return; }
    postsFactory.create({
      title: this.title,   
      link: this.link, 
      
    });
    this.title = "";
  };

  self.incrementUpvotes = function(post) {
    posts.upvote(post)
};

}])