# Scroll addClass()

## js
### 스크롤내릴 때 섹션 offset top에서 class 붙이기
```js
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	var sec01 = $('#section01').offset().top;
	var sec02 = $('#section02').offset().top;


	if (scroll > sec02) {
		$("#header").addClass("bl");
	} else {
		$("#header").removeClass("bl");
	}
	
	
});
```
