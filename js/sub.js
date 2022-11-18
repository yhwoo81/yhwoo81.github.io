$(document).ready(function(){
    
    // FAQ
    $('.faq .question').click(function(){
        var submenu = $(this).next('.answer');
        $('.faq .answer').slideUp();
        $('.faq .question').removeClass('on');
        
        if( submenu.is(":visible") ){
            $(this).siblings('.question').removeClass('on');
            submenu.slideUp();
        }else{
            submenu.slideDown();
            $(this).addClass('on');
        }
    });
    
    //
    
});