;(function($){
  $(function(){
    $('.main_view .view').bxSlider({auto:true, mode:'fade', controls:false, pager:false});
    $('.enjoy_view .enjoy_slider').bxSlider({auto:true, maxSlides:4, minSlides:1, slideWidth:300, moveSlides:1, prevText:"", nextText:""});
    var pressSlider = $('#menu .menu_slider').bxSlider({auto:true, maxSlides:4, slideWidth:204, minSlides:1, moveSlides:1, prevText:"", nextText:""});
    $('.mcdrive_ani').scrollToGiveClass({class:"active", baseline:'bottom'});
    $('.open_menu').clickToGiveClass({});
    $('.open_search').clickToGiveClass({class:'open',remove:'.close_search'});

    $(window).on('load resize',function(){
    var win = $(window).outerWidth(); //화면의 너비를 추출
    if(win <= 320){
    pressSlider.reloadSlider({auto:true,maxSlides:1,moveSlides:1,minSlides:1,
      slideWidth:204,nextText:'',prevText:''});
    }else if(win <= 640){
      pressSlider.reloadSlider({auto:true,maxSlides:2,moveSlides:1,minSlides:2,
        slideWidth:204,nextText:'',prevText:''});
    }else if(win <= 768){
      pressSlider.reloadSlider({auto:true,maxSlides:3,moveSlides:1,minSlides:3,
        slideWidth:204,nextText:'',prevText:''});
    }else if(win <= 1024){
      pressSlider.reloadSlider({auto:true,maxSlides:4,moveSlides:1,minSlides:4,
        slideWidth:204,nextText:'',prevText:''});
    }else{
      pressSlider.reloadSlider({auto:true,maxSlides:4,moveSlides:1,minSlides:4,
        slideWidth:204,nextText:'',prevText:''});
    }

    });
  });
})(jQuery);
