main_app.directive('unslider', function(){
	return {
		restrict: 'AE',
		link: function(scope, element, attr){
			$('.banner').unslider({
	            speed: 500,               //  The speed to animate each slide (in milliseconds)
	            delay: 3000,              //  The delay between slide animations (in milliseconds)
	            complete: function() {},  //  A function that gets called after every slide animation
	            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
	            dots: true,
	            fluid: false,              //  Support responsive design. May break non-responsive designs
	            arrows: false,
	            autoplay: true,
	        });
		}
	};
});