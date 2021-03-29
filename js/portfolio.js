;(function($){
var portfolio = {
    init:function(){
        var btn = 0;
        var that = this;
        that.scrollFn();
        that.headerFn();
        that.section1Fn();
        that.section2Fn();
        that.section3Fn();
        that.section4Fn();
        that.section5Fn();
        that.section6Fn();
        that.section7Fn();
        that.section8Fn();
        that.section9Fn();
        that.videoModal();
    },
    scrollFn(){
        
        var scrollN = 0;
        var scrollO = 0;
        var $header = $('#header');
        var x = null;
        var $topBtn = $('#top-btn .top-btn');
        var $topBtnWrap = $('#top-btn');
        var that = this;

        $(window).scrollTop();
        function scrollEvent(){
            scrollN = $(window).scrollTop();
            
            x = scrollN > scrollO ? "down" : "up"

            if(scrollN == 0){
                $header.removeClass('addDown');
                $header.removeClass('addUp');
                $topBtnWrap.addClass('addHide');
            }
            else{
                
                if(x == "down"){
                    if(that.btn == 1){
                        $header.removeClass('addDown');
                        $header.removeClass('addUp');
                        $header.addClass('addfixed');
                        $header.css({display:'block'});
                    }
                    else{
                        $header.removeClass('addUp');
                        $header.addClass('addDown');
                        $topBtnWrap.removeClass('addHide');
                         }
                    }
                else{
                        $header.removeClass('addDown');
                        $header.addClass('addUp');
                     
                }
            }
            scrollO = scrollN;


        }

        scrollEvent();
        $(window).scroll(function(){
            scrollEvent();
        })


        //맨 위로 버튼
        $topBtn.on({
            click:function(){
              
                   $("html,body").animate({scrollTop:0},500, 'easeInOutCirc');

               
            }
        });
    },
    headerFn:function(){
        var $mainBtn = $('#nav .main-btn');
        var $sub = $('#nav .sub-menu-wrap');
        var $subBtn = $('#nav .sub-btn');
        var $subsub = $('#nav .subsub');
        var $subsubBtn = $('#nav .subsub-btn');
        var $subsubsub = $('#nav .subsubsub-wrap');
        var $mobileBtn = $('#header .mobile-btn');
        var $bar = $('#header .bar');
        var $nav = $('#nav');
        var $winIW = $(window).innerWidth();
        var that = this;
        var mode = 0;
        var pc = 0;
        var m = 0;
       
        $(window).innerWidth() > 980 ? mode = 0 : mode = 1;

        function pcFn(){
             
            pc=1;
            $nav.stop().show();
            $mainBtn.stop().show();
            $sub.stop().hide();
            $subsub.stop().hide();
            $subsubsub.stop().hide();
            // $mainBtn.off('click');
            // $subBtn.off('click');
            // $subsubBtn.off('click');
           


            //메인 버튼
            $mainBtn.on({
                mouseenter:function(e){
                    e.preventDefault();
                    $sub.stop().hide();
                    $(this).next().stop().show();
                },    
            });

            $nav.on({
                mouseleave:function(){
                    $sub.stop().hide();
                    $subsub.stop().hide();
                    $subsubsub.stop().hide();
                }
            });

            //서브 버튼
            $subBtn.on({
                mouseenter:function(e){
                    e.preventDefault();
                    $subsub.stop().hide();
                    $(this).next().stop().show();
                }
            });

            $subsub.on({
                mouseleave:function(){
                    $subsub.stop().hide();
                    $subsubsub.stop().hide();
                }
            });

            //서브서브 버튼
            $subsubBtn.on({
                mouseenter:function(e){
                    e.preventDefault();
                    $subsubsub.stop().hide();
                    $(this).next().stop().show();
                }
            });

            $subsubsub.on({
                mouseleave:function(){
                    $subsubsub.stop().hide();
                }
            });
        } //pc

        function mobileFn(){
            m=1;
            $mainBtn.off('mouseenter');
            $subBtn.off('mouseenter')
            $subsub.off('mouseleave');
            $subsubBtn.off('mouseenter');
            $subsubsub.off('mouseleave');
            $nav.off('mouseleave')


            $nav.stop().slideUp(100);
            // $sub.stop().slideUp(0);
            // $subsub.stop().slideUp(0);
            // $subsubsub.stop().slideUp(0);
            $bar.removeClass('addMobile');
           


        } //mobile
        
        
        //모바일 메뉴 버튼
        $mobileBtn.on({
            click:function(){
                if($(window).innerWidth() <= 980){ 
                $nav.stop().slideUp();
                // $sub.stop().slideUp(100);
                // $subsub.stop().slideUp(100);
                // $subsubsub.stop().slideUp(100);
                $bar.toggleClass('addMobile');
                $nav.stop().slideToggle(300);
                $('.header-bottom').toggleClass('addNavFixed'); 
                $('.logo-box').toggleClass('addNavFixed')   ;
                // $('#wrap').toggleClass('addfixed');
                $('.header-top').toggleClass('addNavFixed'); 
                // $header.css({position:'fixed'});

                return that.btn == 0 ? that.btn = 1 : that.btn = 0;

                }
            }
        });
        
        $mainBtn.on({
            click:function(e){
                e.preventDefault();
                $sub.stop().slideUp(100);
                $subsub.stop().slideUp(100);
                $subsubsub.stop().slideUp(100);
                $(this).next().stop().slideToggle(300);

            }
        });

        $subBtn.on({
            click:function(e){
                e.preventDefault();
                $subsub.stop().slideUp(100);
                $subsubsub.stop().slideUp(100);
                $(this).next().stop().slideToggle(300);
            }
        });

        $subsubBtn.on({
            click:function(e){
                e.preventDefault();
                $subsubsub.stop().slideUp(100);
                $(this).next().stop().slideToggle(300);
            }
        });

        function pcMobile(){
            if($(window).innerWidth() > 980){ //pc
                pc=1;
                m=0;
                that.btn = 0;
                // mode=0;
                pcFn();
            }
            else{ //mobile
                pc=0;
                m=1;
                // mode=1;  
                mobileFn();
            }
        }

        setTimeout(pcMobile, 100);

        $(window).resize(function(){

            setTimeout(pcMobile, 100);
            console.log(mode);
        });

        // window.addEventListener('orientationchange',function(){
        //     setTimeout(pcMobile, 100);
        // })



        //글로브 버튼
        var $globeWrap = $('#header .globe-wrap');
        var $globe = $('#header .globe');
        var $globeBox = $('#header .globe-box');

        $globe.on({
            click:function(){
                $globeWrap.stop().slideToggle(200);
            }
        });
        // $globeBox.on({
        //     click:function(){
        //         $globeWrap.stop().slideUp(100);
        //     }
        // });

        //서치 버튼
        var $search = $('#header .search');
        var $searchModal = $('#search-modal');
        var $xBtn = $('#search-modal .x-btn');
        var $wrap = $('#search-modal .wrap');

        $search.on({
            click:function(){
                $searchModal.stop().slideDown(300);
            }
        });
        $xBtn.on({
            click:function(){
                $searchModal.stop().slideUp(100);
            }
        });
        $searchModal.on({
            click:function(){
                $searchModal.stop().slideUp(100);
            }
        });
        $wrap.on({
            click:function(e){
                e.stopPropagation();
            }
        });



    },
    section1Fn:function(){
        var $slideWrap = $('#section1 .slide-wrap');
        var $slide = $('#section1 .slide');
        var $nextBtn = $('#section1 .next-btn');
        var $prevBtn = $('#section1 .prev-btn');
        var $pageBtn = $("#section1 .page-btn");
        var $section1 = $('#section1');
        var $window = $(window);
        var $winW = $(window).width();
        var $winH = $(window).height();
        var n = $slide.length - 3;
        var cnt = 0;
        var setId = null;
        var setId2 = null;
        var $box = $('#section1 .white-box');
        var z= 0;
        var x = 0;
        var y = 0;
        var r = 0;
        var $slideBookingBtn = $('#section1 .title2-container');
        var $scale = $('#section1 .scale');
        var setId3 = null;
        var setId4 = null;
        var $textImg = $('#section1 .title1-container img');
        


        function resizeFn(){
            $winW = $(window).width();    
            
            // if(window.orientation == 0 || window.orientation == 180){
            //     $winH = $winH
            // }
            // else if(window.orientation == 90 || window.orientation == -90){
                if($(window).width() > 980){
                    $winH = $(window).height();
                }
                else{
                $winH = 600;
                }
            // }
            $section1.css({width:$winW,height:$winH});
            $slide.css({width:$winW});
            
            $slideWrap.stop().animate({left:-$winW*cnt}, 0)
        }

        setTimeout(resizeFn, 100);

        $window.resize(function(){
            resizeFn();
        });


        //이미지 박스 addClass
        function imgAdd(){

            x = cnt +1 ;
            if(x>3){x=1}
            if(x<1){x=3}   
            $box.removeClass('addBox');
            $box.eq(x).addClass('addBox');
        }
         setTimeout(imgAdd,100);

        //버튼 박스 addClass
        function btnAdd(){
            y = cnt +1 ;
            if(y>3){y=1}
            if(y<1){y=3}   
            $slideBookingBtn.removeClass('addBtn');
            $slideBookingBtn.eq(y).addClass('addBtn');
        }
         setTimeout(btnAdd,1100);

        // 이미지 박스2
        function textImg(){
            r = cnt +1;
            if(r>3){r=1}
            if(r<1){r=3}
            $textImg.removeClass('addani');
            $textImg.eq(r).addClass('addani');

        }
        setTimeout(textImg,500);
        
        function mainSlideFn(){

                $slideWrap.stop().animate({left:-$winW*cnt}, 500,function(){
                    if(cnt>n){cnt=0}
                    if(cnt<0){cnt=n}
                    $slideWrap.stop().animate({left:-$winW*cnt}, 0)
                    setTimeout(imgAdd,100);
                    $('#section1 .slide-view').removeClass('addColor');
                    setTimeout(textImg,500);
                    setId4 = setTimeout(btnAdd,1000);
                });
                
                imgScale();
                colorPageFn();
            
        }


        function nextCountFn(){
            cnt++;
            mainSlideFn();
        }


        function prevCountFn(){
            cnt--;
            mainSlideFn();
        }

        // //최종함수
        // //다음 슬라이드
        // function doneN(){
        //         clearTimeout(setId3);
        //         clearTimeout(setId4);

        //         nextCountFn();
        //         setId3 = setTimeout(imgAdd,100);
        //         setId4 = setTimeout(btnAdd,1000);           
        // }
        // //이전 슬라이드
        // function doneP(){
        //     clearTimeout(setId3);
        //     clearTimeout(setId4);
        //     setTimeout(prevCountFn,100);
        //     setId3 = setTimeout(imgAdd,200);
        //     setId4 = setTimeout(btnAdd,1000);           
        // }

        $nextBtn.on({
            click:function(){
                if(!$slideWrap.is(':animated')){
                    pause();
                    nextCountFn();
                }
            }
        });

        $prevBtn.on({
            click:function(){
                if(!$slideWrap.is(':animated')){
                    $textImg.removeClass('addani');
                    pause();
                    prevCountFn();
                }
            }
        });






        //페이지 버튼
        function colorPageFn(){
            $pageBtn.removeClass('addPage');
            $pageBtn.eq(cnt>n?0:cnt).addClass('addPage');

        }
        colorPageFn();

        //이미지 크기 
        function imgScale(){
            z = cnt +1 ;
            if(z>3){z=1}
            if(z<1){z=3}           
            $scale.removeClass('addScale');
            $scale.eq(z).addClass('addScale');
        }
        imgScale();

        $pageBtn.each(function(idx){
            $pageBtn.eq(idx).on({
                click:function(){
                    pause();
                    cnt=idx;
                    mainSlideFn().eq(idx);

                }
            });
        });


      
      //자동 롤링

      function autoPlay(){
        setId = setInterval(nextCountFn, 5000);
      }

      autoPlay();

      function pause(){
          clearInterval(setId);
          clearInterval(setId2);
          setId2 = setInterval(function(){
            clearInterval(setId);
            clearInterval(setId2);
            nextCountFn();
            autoPlay();
          }, 5000);
      }

      //터치 스와이프
      $slideWrap.swipe({
          swipeLeft:function(){
            if(!$slideWrap.is(':animated')){
                pause();
                nextCountFn();
            }
          },
          swipeRight:function(){
            if(!$slideWrap.is(':animated')){
                pause();
                prevCountFn();
            }
          }
      });


    },//section1
    section2Fn:function(){
        //스크롤 이벤트
        var $col = $('#section2 .col');
        var $section2 = $('section2');

        
        $(window).scroll(function(){

            if($(window).scrollTop()==0){
                $('#section2 .col').stop().fadeOut(300);
            }

            if($(window).scrollTop() >= $('#section2').offset().top-700){
                $('#section2 .col').eq(0).stop().fadeIn(300);
                $('#section2 .col').eq(1).stop().fadeIn(600);
                $('#section2 .col').eq(2).stop().fadeIn(900);
            }
        })
    },
    section3Fn:function(){

        

        $(window).scroll(function(){

            if($(window).scrollTop()==0){
                $('#section3 .col').removeClass('addSection3');
            }
        
            if($(window).scrollTop() >= $('#section3').offset().top-600){
                $('#section3 .col').eq(0).addClass('addSection3');
                $('#section3 .col').eq(1).addClass('addSection3');
                $('#section3 .col').eq(2).addClass('addSection3');

            }
            
        });
    },
    section4Fn:function(){
        var $slideWrap = $('#section4 .slide-wrap');
        var $slide = $('#section4 .slide');
        var $nextBtn = $('#section4 .next-btn');
        var $prevBtn = $('#section4 .prev-btn');
        var cnt=0;
        var n = $slide.length - 3;
        var $window = $(window);
        var $winIW = $window.innerWidth();
        var $winW = $window.width();
        var $winH = $window.height();
        var $scrollLi = $('#section4 li');



        function section4Size(){
            if($(window).innerWidth() > 980){
                $winW = $window.width();
                $winH = $window.height();
                $slide.css({width:$winW/2});
            }
            else{
                $winW = $window.width();
                $winH = $window.height();
                $slide.css({width:$winW});
            }
            section4Slide();
        }
        section4Size();

        $window.resize(function(){
            section4Size();
        })

        function section4Slide(){
            if($winIW > 980){
            $slideWrap.stop().animate({left:-($winW/2)*cnt}, 400, 'easeInOutExpo',function(){
                if(cnt>n){cnt=0;}
                if(cnt<0){cnt=n;}
                $slideWrap.stop().animate({left:-($winW/2)*cnt}, 0);

            })
            }
            else{
                $slideWrap.stop().animate({left:-($winW)*cnt}, 400, 'easeInOutExpo',function(){
                    if(cnt>n){cnt=0;}
                    if(cnt<0){cnt=n;}
                    $slideWrap.stop().animate({left:-($winW)*cnt}, 0);
    
                })
            }
        }

        function nextCountFn(){
            cnt++;
            section4Slide();
        }

        function prevCountFn(){
            cnt--;
            section4Slide();
        }

        $nextBtn.on({
            click:function(){
                if(!$slideWrap.is(':animated')){
                    nextCountFn();
                }
            }
        });

        $prevBtn.on({
            click:function(){
                if(!$slideWrap.is(':animated')){
                    prevCountFn();
                }
            }
        });

        $slide.swipe({
            swipeLeft:function(){
                if(!$slideWrap.is(':animated')){
                    nextCountFn();
                }
            },
            swipeRight:function(){
                if(!$slideWrap.is(':animated')){
                    prevCountFn();
                }
            }

        });

        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $('#section4 li').removeClass('addSection4');
            }

            if($(window).scrollTop() >= $('#section4').offset().top-500){
                
                $('#section4 li').each(function(idx){
                    setTimeout(function(){
                        var that = $(this)
                        $('#section4 li').eq(idx).addClass('addSection4');
                    },200*idx)

                })
                // $('#section4 li').eq(0).addClass('addSection4');
                // $('#section4 li').eq(1).addClass('addSection4');
            }
        });
        

    },
    section5Fn:function(){
        var $section5Li = $('#section5 li');

        $(window).scroll(function(){

            if($(window).scrollTop()==0){
                $('#section5 li').stop().animate({opacity:0},0);
            }
            if($(window).scrollTop() >= $('#section5').offset().top - 500){
                $('#section5 li').eq(0).stop().animate({opacity:1},200);
                $('#section5 li').eq(1).stop().animate({opacity:1},600);
                $('#section5 li').eq(2).stop().animate({opacity:1},1000);
                $('#section5 li').eq(3).stop().animate({opacity:1},1400);
            }
        })
    },
    section6Fn:function(){
        //마우스 무브 이벤트
        var $img = $('#section6 img');
        var $liBox = $('#section6 li');
        var x = 0;
        var y = 0;

        var $topCon = $('#section6 .top-content');

        $liBox.on({
            mousemove:function(event){      
                x = event.clientX*0.04;
                y = event.clientY*0.04;

                $(this).find('img').css({top:y-(y/2),left:x-(x/2)});


            },
            mouseleave:function(){
                $(this).find('img').css({top:y-(y/2),left:x-(x/2)},0).css({top:0,left:0});
            }

        });

        //scroll
        $(window).scroll(function(){
            if($(window).scrollTop()<=10){
                $topCon.stop().fadeOut(0);
                $liBox.removeClass('addEvent');
            }
            if($(window).scrollTop()>=$('#section6').offset().top-700){
                $topCon.stop().fadeIn(500);
            }
                
            
            if($(window).scrollTop()>=$('#section6').offset().top-500){
                
                $liBox.each(function(idx){
                    setTimeout(function(){
                        $liBox.eq(idx).addClass('addEvent');
                    },200*idx);
                })
            }
        });

    },
    section7Fn:function(){
        var $topBox = $('#section7 .top-box');
        var $contBox = $('#section7 .cont-box');

        $(window).scroll(function(){
            if($(window).scrollTop()<=10){
                $topBox.stop().fadeOut(0);
                $contBox.removeClass('addTop');
                $contBox.eq(2).removeClass('addTop')

            }
            if($(window).scrollTop()>=$('#section7').offset().top-500){
                $topBox.stop().fadeIn(400);
            }
            if($(window).scrollTop()>=$('#section7').offset().top-400){
                $contBox.each(function(idx){
                    setTimeout(function(){
                        
                        $contBox.eq(idx).addClass('addTop');
                    },200*idx);
                })
                
            }
        })
    },
    section8Fn:function(){
        var $section8 = $('#section8 .wrap');
        var $winW = $(window).width();
        var $section8H = $section8.height();   

        var $h2 = $('#section8 h2');
        var $img = $('#section8 img');
        var $span = $('#section8 span');


        function backFn(){
            if($(window).innerWidth() < 1200){
                $section8.css({backgroundAttachment:"scroll"});
            }
            else{
                $section8.css({backgroundAttachment:"fixed"});
            }
        }
        setTimeout(backFn,100);

        function section8Size(){
            $winW = $(window).width();
            $section8.css({width:$winW});
        }

        setTimeout(section8Size,100);

        $(window).resize(function(){
            setTimeout(section8Size,100);
            setTimeout(backFn,100);
        });

       

        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $('#section8 span').removeClass('addCircle');
                $h2.stop().animate({top:500},0);
                $img.stop().animate({top:500},0);
                $('#section8 .sign-box-wrap').removeClass('addEmailBox');
            }
            if($(window).scrollTop()>=$('#section8').offset().top-400){
                $('#section8 span').addClass('addCircle');
            }
            if($(window).scrollTop()>=$('#section8').offset().top-300){
                $h2.stop().animate({top:0},200);
                $img.stop().animate({top:0},400);
                
            }
            if($(window).scrollTop()>=$('#section8').offset().top+100){
                $('#section8 .sign-box-wrap').addClass('addEmailBox');
            }
        })

    },
    section9Fn:function(){
        var $topBox = $('#section9 .top-box');
        var $bottomBox = $('#section9 .bottom-content');
        
        $(window).scroll(function(){
            if($(window).scrollTop()==0){
                $topBox.stop().animate({opacity:0},0);
                $bottomBox.stop().fadeOut(0);

            }
            if($(window).scrollTop()>=$('#section9').offset().top-400){
                $topBox.stop().animate({opacity:1},300);
            }

            if($(window).scrollTop()>=$('#section9').offset().top-100){
                $bottomBox.eq(0).stop().fadeIn(400);
                $bottomBox.eq(1).stop().fadeIn(1000);
                $bottomBox.eq(2).stop().fadeIn(1600);
            }
        })
    },
    videoModal:function(){
        var $videoBtn = $('#section8 .video-btn');
        var $videoModal = $('#video-modal');
        var $wrap = $('#video-modal .wrap');
        var $container = $('#video-modal .container');
        var winW = $(window).width();
        var winH = $(window).height();
        var conW = $container.width();
        var conH = $container.height();
        var marginT = (conH - $(window).height())/2;
        var marginL = (conW - $(window).width())/2;

         //비디오 모달
         //팝업
         $videoBtn.on({
            click:function(e){
                e.preventDefault();
                $('#video-modal').stop().fadeIn(500);
            }
        });

        $wrap.on({
            click:function(e){
                e.preventDefault();
                $videoModal.stop().fadeOut(300);
            }
        });

        $container.on({
            click:function(e){
                e.stopPropagation();
            }
        });

        //크기 맞춤

        function videoresize(){
            $wrap = $('#video-modal .wrap');
            $container = $('#video-modal .container');
            winW = $(window).width();
            winH = $(window).height();
            conW = $container.width();
            conH = $container.height();
            marginT = (conH - $(window).height())/2;
            marginL = ($('#video-modal .container').width() - $(window).width())/2;

                $container.css({marginLeft:-marginL,marginTop:-marginT})
        }
 
        setTimeout(videoresize,100);
        $(window).resize(function(){
            setTimeout(videoresize,100);
        })
        
    }

};
portfolio.init();
})(jQuery);