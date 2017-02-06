function ZMBlogController(ZMBlogService) {
	let ctrl = this;

	ZMBlogService.getPosts()
		.then(function(response) {
			ctrl.posts = response;
		})
		.catch(function(error) {
			console.error(error);
		});
}

angular
	.module('app.components')
	.controller('ZMBlogController', ZMBlogController);