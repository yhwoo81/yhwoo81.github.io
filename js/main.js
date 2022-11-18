$(document).ready(function(){
    
    // 메인 이미지 슬라이드
    $('.main-slider').slick({
        arrows:true,
        dots:false,
        autoplay: true,
        autoplaySpeed:8000,
        speed:1000,
        pauseOnHover:false,
        pauseOnFocus:false,
        
    });
    $('.guide-inner').slick({
        arrows:false,
        dots:true
    });
    
    // 스크롤시 header 배경색
    if( $(window).innerWidth() > 1300 ){
        $(window).scroll(function(){
            scr = $(window).scrollTop();
            if( scr > 50 ) {
                $('header').css('background-color','#fff');
                $('.header-inner h1').addClass('scroll');
                $('.header-inner .header-nav a').addClass('scroll');
                $('.header-inner .header-menu a').addClass('scroll');
            } else{
                $('header').css('background-color','transparent');
                $('.header-inner h1').removeClass('scroll');
                $('.header-inner .header-nav a').removeClass('scroll');
                $('.header-inner .header-menu a').removeClass('scroll');
            }
        });
    }
    
    // 브라우저 가로 1060이상 슬라이드 해제
    if( $(window).outerWidth() > 1023 ){
        $('.guide-inner').slick("unslick");
    }
    
    
    // 이용사례 tab 메뉴
    $('.tab-menu li').click(function(){
        $('.tab-menu li').removeClass('on');
        $(this).addClass('on');
        var ti = $(this).index();
        $('.tab-content li').hide();
        $('.tab-content li').eq(ti).fadeIn();
    });
    $('.tab-right').click(function(){
        var tb = $('.tab-menu li.on').index();
        if(tb == 4){
            tb = -1;
        }
        $('.tab-menu li').removeClass('on');
        $('.tab-menu li').eq(tb+1).addClass('on');
        $('.tab-content li').hide();
        $('.tab-content li').eq(tb+1).fadeIn();
    });
    $('.tab-left').click(function(){
        var tb = $('.tab-menu li.on').index();
        $('.tab-menu li').removeClass('on');
        $('.tab-menu li').eq(tb-1).addClass('on');
        $('.tab-content li').hide();
        $('.tab-content li').eq(tb-1).fadeIn();
    });
    
    //parallax 효과
    $('.service .service-inner h3').addClass('move');
    $('.service .service-inner > p').addClass('move');
    $('.service .service-icon > div').addClass('move');
    $(window).scroll(function(){
        var wst = $(this);
        parallax(wst,$('.section01 .merit-inner .m-box01'),'');
        parallax(wst,$('.section01 .merit-inner .m-box02'),'');
        parallax(wst,$('.section01 .merit-inner .g-button'),'');
        parallax(wst,$('.section02 h3'),'');
        parallax(wst,$('.section02 .tab-menu li + li'),'');
        parallax(wst,$('.section02 .tab-content'),'');
        parallax(wst,$('.section03 h3'),'');
        parallax(wst,$('.section03 .section-inner > img'),'');
        parallax(wst,$('.section04 .merit'),'');
        parallax(wst,$('.section05 h3'),'');
        parallax(wst,$('.section05 .section-inner > img'),'');
        parallax(wst,$('.section06 h3'),'');
    });
    function parallax(wd,wq,way){
        if( wd.scrollTop() > $(wq).offset().top - $(this).height() ){
            $(wq).addClass('move'+way);
        } else {
            $(wq).removeClass('move'+way);
        }
    }
    
    // 사용후기 더보기
    $('.section03 .plus button').click(function(){
        $('.review-inner .review-box.off').fadeIn();
        $(this).fadeOut();
    });
    
});