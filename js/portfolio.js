$(document).ready(function(){
    
    // header 배경색
    $(window).scroll(function(){
        scr = $(window).scrollTop();
        if( scr > 50 ) {
            $('header').css('background-color','rgba(255,255,255,.95)')
        } else{
            $('header').css('background-color','transparent')
        }
    });
    
    // 포트폴리오 카테고리 탭 메뉴
    $('.tab-menu ul li').click(function(){
        var cn = $(this).index();
        $('.tab-menu ul li').removeClass('on');
        $(this).addClass('on');
        $('.tab-list ul.row').hide();
        $('.tab-list ul.row').eq(cn).fadeIn(700);
        
        //카테고리 클릭시 하단 페이지 1페이지로
        $('.page ul li').removeClass('active');
        $('.page ul li.f-l').addClass('active');
        $('ul.row li').removeClass('show');
        $('ul.all li').slice(0,6).addClass('show');
        $('ul.web-ui-ux li').slice(0,6).addClass('show');
        $('ul.mobile-ui-ux li').slice(0,6).addClass('show');
        $('ul.branding li').slice(0,6).addClass('show');
        $('ul.print li').slice(0,6).addClass('show');
    });
    
    //a속성 제거
    $(document).on('click','.page ul li', function(e){
        e.preventDefault();
    });
    
    // 하단 페이지
    $('.page .number-p').click(function(){
        $('body,html').animate({scrollTop:0},700);
        var pn = $(this).index()+1;
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        $(this).closest('.page').siblings('li').removeClass('show');
        pageing( $(this).closest('.page').siblings('li') , (pn-1)*6 , pn*6 )
    });
    
    function pageing(m,a1,a2){
        m.slice(a1,a2).addClass('show');
    }; 
    
    // 팝업창 버튼 hover
    $('.popup-b-inner button').hover(function(){
        $(this).addClass('hover');
    },function(){
        $(this).removeClass('hover');
    });
    
    // 팝업창 닫기 
    $('.popup-b-inner button').click(function(){
        
        $('.port-popup').removeClass('show');
        
        if($('.port-popup').css('position') == 'fixed'){
            $('.tab-list').fadeIn(1000);
        }
        $('header .h-effect').removeClass('disappear');
        
        setTimeout(function(){
            $('.port-popup').hide();
            $('.popup-b-inner button').hide();
        },1100);
    });
    
    // 팝업창 열기 
    $('.tab-list ul.row > li').click(function(){
        $('.port-popup').show();
        $('.popup-b-inner button').show();
        $('body,html').scrollTop(0);
        var c_i = $(this).children('i').html();
        $('.port-popup .img-inner img').css({display:'none'});
        $('.port-popup .pop-info .all').css({display:'none'});
        $('.port-popup .img-inner '+ '.' + c_i).css({display:'inline-block'});
        $('.port-popup .pop-info '+ '.' + c_i).css({display:'block'});
        $('.port-popup').addClass('show');
        
        if($('.port-popup').css('position') == 'absolute'){
            $('.tab-list').fadeOut(1000);
        }
        $('header .h-effect').addClass('disappear');
    });
    
    // 포트폴리오 갯수 자동 계산
    a_page('.all'); a_page('.web-ui-ux'); a_page('.mobile-ui-ux');
    function a_page (pn){
        var p_volume = $(pn+' .all-page').closest('.page').siblings('li').length;
        $(pn+' .all-page p strong').html(p_volume);
    }
    
    // typed.js 
//    var options = {
//      strings: ['고객의', '고객에 의한', '고객을 위한', '고객을 위한<br>서비스를 제공합니다.'],
//      typeSpeed: 110,
//      loop: true
//    };
//    var options = {
//      strings: ['We help <br> brands convert their<br class="b-768">value into <br class="b-1024 b-1300"> interactive<br class="b-768 b-1024">experiences effectively.'],
//      typeSpeed: 40
//    };

//    var typed = new Typed('.typed', options);
    
    
    // particles.js
    particlesJS("particles-js", {
          particles: {
            number: {
                value: 150,
                density: {
                    enable: !0,
                    value_area: 3e3
                }
            },
            color: {
                value: "#000"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 3
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: .3,
                random: !1,
                anim: {
                    enable: !1,
                    speed: .8,
                    opacity_min: .1,
                    sync: !1
                }
            },
            size: {
                value: 1,
                random: !0,
                anim: {
                    enable: !1,
                    speed: 50,
                    size_min: .1,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 150,
                color: "#000",
                opacity: .2,
                width: 1
            },
            move: {
                enable: !0,
                speed: 5,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1,
                    mode: "repulse"
                },
                onclick: {
                    enable: !1
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 800,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 800,
                    size: 80,
                    duration: 2,
                    opacity: .8,
                    speed: 3
                },
                repulse: {
                    distance: 400,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
      retina_detect: true
    });
});