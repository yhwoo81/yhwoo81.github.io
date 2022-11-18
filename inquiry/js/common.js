$(document).ready(function(){
    // 모바일 사이드 메뉴
    $('.mobile-m-b').click(function(){
        $('.nav').fadeIn();
        $('.nav .side').css({left:'17%'});
    });
    $('.nav .black-bg').click(function(){
        $('.nav').fadeOut();
        $('.nav .side').css({left:'100%'});
    });
    // 맨위로 버튼
    $('.footer-inner .top').click(function(){
        $('html, body').animate({
            scrollTop:0
        },700);
    });
    $('header .ready').click(function(){
        alert('서비스 준비중입니다.')
    });
    
    //parallax 효과
    $('.service .main .text-box p').addClass('move');
    $('.service .main .text-box hr').addClass('move');
//    $(window).scroll(function(){
//        var wst = $(this);
//        
//    });
//    function parallax(wd,wq,way){
//        if( wd.scrollTop() > $(wq).offset().top - $(this).height() ){
//            $(wq).addClass('move'+way);
//        } else {
//            $(wq).removeClass('move'+way);
//        }
//    }
    
});