$(function(){
  $('.main_view .view').bxSlider({auto:true, mode:'fade', controls:false, pager:false});
  $('.enjoy_view .enjoy_slider').bxSlider({auto:true, maxSlides:4, minSlides:1, slideWidth:300, moveSlides:1, prevText:"", nextText:""});
  $('#menu .menu_slider').bxSlider({auto:true, maxSlides:4, slideWidth:204, minSlides:1, moveSlides:1, prevText:"", nextText:""});
  $('.mcdrive_ani').scrollToGiveClass({class:"active", baseline:'bottom'});
  $('.open_menu').clickToGiveClass({});
  $('.open_search').clickToGiveClass({class:'open',remove:'.close_search'});
});
