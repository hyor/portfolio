;(function($){
  $(function(){
    $('.main_view .view').bxSlider({auto:true, mode:'fade', controls:false, pager:false});
    var pressSlider = $('.enjoy_view .enjoy_slider').bxSlider({auto:true, maxSlides:4, minSlides:1, slideWidth:600, moveSlides:1, prevText:"", nextText:""});
    var repressSlider = $('#menu .menu_slider').bxSlider({auto:true, maxSlides:4, slideWidth:204, minSlides:1, moveSlides:1, prevText:"", nextText:""});
    $('.mcdrive_ani').scrollToGiveClass({class:"active", baseline:'bottom'});
    $('.open_menu').click(function(){
      $('.sgnb_inner').toggleClass('active');
      $('.open_menu').toggleClass('active');
    });
    $('.open_search').clickToGiveClass({class:'open',remove:'.close_search'});
    $('.tab_menu').tabmenu({class:'selected_02', random:true, hover:true, mode:'class'});
    $(function(){
      //동작하고자하는 실행문 기술
      $('.btn').click(function(){
        var btn = $(this);//클릭한 btn요소가 선택됨
        var open = btn.parent().hasClass('selected');
        $('.selected').find('.sub').slideUp(); //find -> 자손을 찾는다
        $('.selected').removeClass('selected');
        if(!open){
        btn.parent().addClass('selected');
        btn.siblings('.sub').slideDown();
        }
      });
    });
    $(window).on('load resize',function(){
    var win = $(window).outerWidth(); //화면의 너비를 추출
    if(win <= 385){
    pressSlider.reloadSlider({auto:true,maxSlides:1,moveSlides:1,minSlides:1,
      slideWidth:300,nextText:'',prevText:''});
    }else if(win <= 640){
      pressSlider.reloadSlider({auto:true,maxSlides:2,moveSlides:1,minSlides:2,
        slideWidth:300,nextText:'',prevText:''});
    }else if(win <= 768){
      pressSlider.reloadSlider({auto:true,maxSlides:3,moveSlides:1,minSlides:3,
        slideWidth:300,nextText:'',prevText:''});
    }else if(win <= 1024){
      pressSlider.reloadSlider({auto:true,maxSlides:4,moveSlides:1,minSlides:4,
        slideWidth:300,nextText:'',prevText:''});
    }else{
      pressSlider.reloadSlider({auto:true,maxSlides:4,moveSlides:1,minSlides:4,
        slideWidth:300,nextText:'',prevText:''});
    }

    });

    $(window).on('load resize',function(){
    var win = $(window).outerWidth(); //화면의 너비를 추출
    if(win <= 385){
    repressSlider.reloadSlider({auto:true,maxSlides:1,moveSlides:1,minSlides:1,
      slideWidth:400,nextText:'',prevText:''});
    }else if(win <= 640){
      repressSlider.reloadSlider({auto:true,maxSlides:2,moveSlides:1,minSlides:2,
        slideWidth:400,nextText:'',prevText:''});
    }else if(win <= 768){
      repressSlider.reloadSlider({auto:true,maxSlides:3,moveSlides:1,minSlides:3,
        slideWidth:400,nextText:'',prevText:''});
    }else if(win <= 1024){
      repressSlider.reloadSlider({auto:true,maxSlides:4,moveSlides:1,minSlides:4,
        slideWidth:400,nextText:'',prevText:''});
    }else{
      repressSlider.reloadSlider({auto:true,maxSlides:4,moveSlides:1,minSlides:4,
        slideWidth:400,nextText:'',prevText:''});
    }

    });
  });
})(jQuery);
