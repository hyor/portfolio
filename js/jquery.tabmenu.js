/*****************************
[옵션항목]

index:
  처음에 보여지는 탭번호(기본값:1)

random:
  처음에 보여지는 탭을 무작위로 선정함(기본값:false)

class:
  부여되는 클래스명(기본값:'active')

hover:
  (기본값:false)
mode:
  컨텐츠 영역의 전환효과(기본값: 'none')
  'none' - 효과없이 바로 전환됨
  'fade' - 서서히 나타나고 사라지는 효과
  'class' - 클래스만 부여됨

****************************/



;(function($){
  //플러그인 선언하기
  $.fn.tabmenu = function(options){
    //플러그인 옵션(기본값)
    var defaults = {
      index:1,
      class:'active',
      random:false,
      hover:false,
      mode:'fade'
    }

    //defaults객체와 options객체를 합쳐서 op라는 객체에 넣음

    var op = $.extend(defaults,options);


    //변수선언
    var menu = $(this).find('li'); //this는 fn을 의미 fn은 .tab_menu를 의미함 따라서 이 변수는 .tab_menu안에 li를 찾는것
    var count = menu.length;//li의 갯수(5)
    var btns = menu.find('a'); //menu는 li 변수 btns는 .tab_menu안에 li안에 a를 찾는 것

    var index = op.index -1;
    if(op.random) index = Math.floor(Math.random()*count);
    //Math.random() = 1부터 0미만의 무작위의 실수를 추출
    //Math.floor() = 소수점 이하의 수를 버림
    menu.eq(index).find('a').addClass(op.class);
    var target = menu.eq(index).find('a').attr('href');
    cont_change();

    if(op.hover) btns.mouseover(tabAction);
    else btns.click(tabAction);

    function tabAction(e){
      e.preventDefault();//태그가 가지는 원래의 기능을 하지않음
      btns.removeClass(op.class);
      $(this).addClass(op.class);
      target = $(this).attr('href');//
      cont_change();
    };//end:tabAction()

    function cont_change(){
      $(target).addClass(op.class);
      $(target).siblings().removeClass(op.class);

      if(op.mode == 'none'){
      $(target).show();
      $(target).siblings().hide();
    }else if(op.mode == 'fade'){
      $(target).fadeIn();
      $(target).siblings().fadeOut();
      }
    };//end:cont_change()
    function tabContents(){

    };//end:tanContents()
  }//end:tabmenu();


})(jQuery);
