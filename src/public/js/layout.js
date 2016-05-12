$(function(){
	$('.navtab a').mouseover(function() {
		$(this).addClass('active');
	}).mouseleave(function(){
		if($('.navtab .active').length >= 2){
			$(this).removeClass('active');
		}
	}).click(function(){
		$('.navtab a').removeClass('active').addClass('normal');
		$(this).addClass('active');
	});
});
