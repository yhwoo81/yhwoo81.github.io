$(document).ready(function(){
    // 사이드 메뉴 노출
    $('.mobile_m').click(function(){
        if( $('.mobile_m').hasClass('on') ){
            $('.mobile_m').removeClass('on');
            $('.mobile_nav').removeClass('on');
            $('.mobile_m span').css({backgroundColor:'#444'});
        } else {
            $('.mobile_m').addClass('on');
            $('.mobile_nav').addClass('on');
            $('.mobile_m span').css({backgroundColor:'#fff'});
        }
        
    });
    
    // 제출하기 팝업창
    $('.pure-button').click(function(){
        alert('메일 전송이 요청 되었습니다! 잠시 기다려 주세요.');
    });
    
    
    
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