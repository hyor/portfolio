/*
�ɼ�
class : �ο��Ǵ� Ŭ������Ī
        (�⺻�� : 'active')
----------------------------------------------------
addTarget : Ŭ������ �޴� �߰�����(����)
            ��)
              addTarget : 'body, #this'
              -body�±׿� id=this���Ұ� �߰�������
               Ŭ������ �ο�����.
----------------------------------------------------
motion : �����ϴ� �̺�Ʈ
          (�⺻�� : 'click')
          - motion : 'mouseover' (���콺�� �÷����� ����)
          - motion : 'hover'
            (���콺�� �÷����� Ŭ������ �ο��ǰ�,
              ���콺�� ������ Ŭ������ ���ŵȴ�.)
----------------------------------------------------
addBtn : �߰��� �����ϴ� ��ư
        ��) addBtn : '.other'
        class=other���Ҹ� ���ؼ� ���ϵ����� ����
----------------------------------------------------
remove : Ŭ������ �����ϴ� ��ư �߰�����
        ��) remove : '.remove'
        class=remove���Ҹ� ���ؼ� �ο��� Ŭ������ ���Ű���
----------------------------------------------------
Ŭ������ �ο��� �� ȣ���Ǵ� �Լ�
  addFunction:function(){}
----------------------------------------------------
Ŭ������ ���ŵ� �� ȣ���Ǵ� �Լ�
  removeFunction:function(){}
*/
;(function($){
	$.fn.clickToGiveClass = function(options){

		var ops = {
					class:'active',
					addTarget:'none',
					motion:'click',
					addBtn:'',
					remove:'',
					addFunction:function(){},
					removeFunction:function(){}
				  };

		ops = $.extend(ops,options);//��ü�� ��ħ.

		return this.each(function(){
		  //�÷����� ���۳���
		  var btn = $(this);
		  var btns = $(ops.addBtn);
		  var target = btn.attr('href');// "#box"

		  target = (ops.addTarget == 'none') ? target : target+","+ops.addTarget;
		  //������ true�̸� #box
		  //������ false�̸� #box,body

		  if(ops.motion == 'mouseover') btn.add(btns).mouseover(toggling);
		  else if(ops.motion == 'hover') btn.add(btns).hover(giving,erasing);
		  else btn.add(btns).click(toggling);

		  $(ops.remove).click(erasing);

		  function toggling(e){
			e.preventDefault();
			if(!btn.hasClass(ops.class)){
			  giving();
			}else{
			  erasing();
			}
		  }//end:toggling

		  function giving(){
			btn.add($(target)).addClass(ops.class);
			ops.addFunction();
		  }//end:giving

		  function erasing(){
			btn.add($(target)).removeClass(ops.class);
			ops.removeFunction();
		  }//end:erasing



		});
	}
})(jQuery);
