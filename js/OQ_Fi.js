$(document).ready(function(){
    
    var nav_u = $('nav ul');
    var logo = $('h1 img');
    var m_icon = $('.mobile_m span');
    var m_icon_three = $('.mobile_m span.three');
    var bt_b = $('header .top_menu a:first-child');
    var bg_c = $('#bg_c');
    
    $('.p_icon,.main_t,.main_sub_t,.main_bg, .main_logo').addClass('move');
    
    $('.inner_s').slick({
        dots:true
    });
    $('.review-inner').slick({
        dots:false
    });
    
    // 로고 이미지 활성화
    
    
    //서브 페이지에서 수강문의 클릭 시 페이지 스크롤 이동
    var page_url = window.location.href; 
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1); 
    // alert(page_id);
    if (page_id == 'c01') { 
        $('html, body').animate({ scrollTop: $('.bg-color-' + page_id).offset().top }, 1000); 
    } else if (page_id == 'c02'){
        $('html, body').animate({ scrollTop: $('.bg-color-' + page_id).offset().top }, 1000); 
    } else if (page_id == 'c03'){
        $('html, body').animate({ scrollTop: $('.bg-color-' + page_id).offset().top }, 1000); 
    } else if (page_id == 'c04'){
        $('html, body').animate({ scrollTop: $('.bg-color-' + page_id).offset().top }, 1000); 
    } else if (page_id == 'c05'){
        $('html, body').animate({ scrollTop: $('.bg-color-' + page_id).offset().top }, 1000); 
    } 
    
    $(window).scroll(function(){
        var wst = $(this);
        color_c(wst,$('main'),'rgb(8, 23, 60)',1);
        color_c(wst,$('.bg-color-c01'),'rgb(89,53,223)',3); 
        color_c(wst,$('.bg-color-c02'),'rgb(251,251,252)',2);
        color_c(wst,$('.bg-color-c03'),'rgb(219,73,90)',3); 
        color_c(wst,$('.bg-color-c04'),'rgb(8,23,60)',2);
        color_c(wst,$('.bg-color-c05'),'rgb(50,77,176)',2);
        color_c(wst,$('.bg-color-c06'),'rgb(8, 23, 60)',2);
        parallax(wst,$('.ft01 .ft_bg'));
        parallax(wst,$('.ft02 .ft_bg'));
        parallax(wst,$('.ft03 .ft_bg'));
        parallax(wst,$('.ft01 .ft_text'));
        parallax(wst,$('.ft02 .ft_text'));
        parallax(wst,$('.ft03 .ft_text'));
        parallax(wst,$('.st01 h3'));
        parallax(wst,$('.main_txt'));
        parallax(wst,$('.sub_txt'));
        parallax(wst,$('.main_logo'));
        parallax(wst,$('.service_box'));
        parallax(wst,$('.main_bg'));
        parallax(wst,$('.st02 h3'));
        parallax(wst,$('.st_t_inner'));
        parallax(wst,$('.section3_main'));
        parallax(wst,$('.section3_txt'));
        parallax(wst,$('.all_in_one .txt_box'));
        parallax(wst,$('.c_bg'));
        parallax(wst,$('.c_box'));
        parallax(wst,$('.st04 h3'));
        parallax(wst,$('.st04 > p'));
        parallax(wst,$('.aio_bg'));
        parallax(wst,$('.text_left'));
        parallax(wst,$('.text_right'));
        //parallax(wst,$('.fare01 .fare_box'));
        //parallax(wst,$('.fare02 .fare_box'));
        //parallax(wst,$('.st05 h3'));
        //parallax(wst,$('.stbg_left,.stbg_right'));
    });
    
    //상단 내비게이션 색변경
    ht = $(window).height('section:first-of-type');
    console.log(ht)
    $(window).scroll(function(){
        scr = $(window).scrollTop();
        if( scr > 50 ) {
            $('header').css('background-color','rgba(255,255,255,.95)')
            $('.pc_nav_s li').css('color','#444444')
            $('.top_menu a:first-child').css({'color':'#fff','border':'1px solid #613EEA',backgroundColor:'#613EEA'})
            $('.top_menu a:last-child').css({'color':'#613EEA','border':'1px solid #613EEA'})
            $('.logo_wh').css('display','none')
            $('.logo_gr').css('display','block')
            m_icon_three.css('background-color','#444')
        } else{
            $('header').css('background-color','rgb(8, 23, 60, 0)')
            $('.pc_nav_s li').css('color','#fff')
            $('.top_menu a:first-child').css({backgroundColor:'transparent'})
            $('.top_menu a').css({'color':'#fff','border':'1px solid #fff'})
            $('.logo_wh').css('display','block')
            $('.logo_gr').css('display','none')
            m_icon_three.css('background-color','#FFF')
        }
    });

 
    $('.header_inner ul li').click(function(){
		idx = $(this).index();
		function m_scroll (now_n){
			var offset = $('.scroll').eq(now_n).offset();
        	$('html, body').stop().animate({scrollTop : offset.top}, 800);
            if( $('.mobile_m').hasClass('on') ){
                $('.mobile_m').removeClass('on');
                $('.mobile_nav').removeClass('on');
            } else {
                $('.mobile_m').addClass('on');
                $('.mobile_nav').addClass('on');
                m_icon.css({backgroundColor:'#fff'});
            }
		};
		m_scroll(idx);
	});

    $('.mobile_m').click(function(){
        if( $('.mobile_m').hasClass('on') ){
            $('.mobile_m').removeClass('on');
            $('.mobile_nav').removeClass('on');
        } else {
            $('.mobile_m').addClass('on');
            $('.mobile_nav').addClass('on');
        }
        if( $("header").css("background-color") == "rgba(255, 255, 255, 0.95)" ){
            m_icon_three.css({backgroundColor:'#444'});
        } else {
            m_icon_three.css({backgroundColor:'#fff'});
        }
    });
    
    function parallax(wd,wq){
        if( wd.scrollTop() > $(wq).offset().top - $(this).height() ){
            $(wq).addClass('move');
        } else {
            $(wq).removeClass('move');
        }
    }
    function color_c (wd,set,co,b){
        if( wd.scrollTop() > set.offset().top - $(this).height()/b ){
            bg_c.css({backgroundColor:co});
        }
    }
    function scrollAni(wd,sv,vv){
        if(wd.scrollTop() > $(sv).offset().top - $(this).height()){
            vv.play();
        }else{
            vv.reset();
        }
    };
    
    // 유튜브 슬라이드 버튼 클릭시 일시 정지
    $('.slick-arrow').addClass('pause-video');
    $('.slick-dots > li').addClass('pause-video');
    $('.pause-video').click(function(){
        $('.youtube-video')[1].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $('.youtube-video')[2].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        $('.youtube-video')[3].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
    
    
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
                value: "#ffffff"
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
                color: "#ffffff",
                opacity: .4,
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




