$(document).ready(function(){
    
    $('.mobile_m').click(function(){
        if( $('.mobile_m').hasClass('on') ){
            $('.mobile_m').removeClass('on');
            $('.mobile_nav').removeClass('on');
        } else {
            $('.mobile_m').addClass('on');
            $('.mobile_nav').addClass('on');
        }
    });
    
    $('.top-button img').click(function(){
        $('body,html').animate({scrollTop:0},1000);
    });
});