$(document).ready(function(){

//햄버거메뉴
	$('.mobile-menu').css('display','none');
	$('header .mobile a').click(function(){
		$('.mobile-menu').fadeIn();
	});
	$('.mobile-menu .menu-close a').click(function(){
		$('.mobile-menu').fadeOut();
	});
    
//service 화면

	$(window).resize(function() {
  	if ($(window).width() < 1281) {
		$('main > div').mouseover(function(){
			$(this).css('height','63vh');
			$(this).next('div').css({'height':'37vh','transition':'1s'});
			$(this).prev('div').css({'height':'37vh','transition':'1s'});
		});
		$('main > div').mouseleave(function(){
			$(this).css('height','50vh');
			$(this).next('div').css({'height':'50vh','transition':'1s'});
			$(this).prev('div').css({'height':'50vh','transition':'1s'});
		});
  	} else {
  		// $('main > div').css('height','100vh')
    	$('main > div').mouseover(function(){
			$(this).css('width','63%');
			$(this).next('div').css({'height':'100vh', 'width':'37%','transition':'1s'});
			$(this).prev('div').css({'height':'100vh', 'width':'37%','transition':'1s'});
		});
		$('main > div').mouseleave(function(){
			$(this).css('width','50%');
			$(this).next('div').css({'height':'100vh', 'width':'50%','transition':'1s'});
			$(this).prev('div').css({'height':'100vh', 'width':'50%','transition':'1s'});
		});
  	}
	});
});