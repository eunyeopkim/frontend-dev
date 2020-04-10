// DOM Level 2 Event 처리 : 특정 Element의 Event의 Listener를 등록하는 방식
// 특정 Event Handler(Listener)를 여러개 등록할 수 있다.
var TabBox = {
	init : function() {
		$(function() {
			$("li:first").addClass('selected');
			$('.tab-box ul li').click(TabBox._changeTabbox);
		});
	},
	_changeTabbox : function() {
		console.log(this);
		$('ul li').removeClass('selected');
		$(this).addClass('selected');
		
		var index = $("li").index(this) + 1;
		$('.tab-box div').text('탭뷰가'+ index +'바뀌었습니다.');
	}
}