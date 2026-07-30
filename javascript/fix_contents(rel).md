# Fix

## footer의 높이를 계산해서 푸터 위에서 멈추는 fix-contents

### 코드

```js
window.onscroll = function (e) {
	e.preventDefault();

	var f_height = $('#footer').outerHeight(); 

	var docHeight = document.body.offsetHeight;
	docHeight = docHeight == undefined ? document.documentElement.scrollHeight : docHeight;

	var winheight = window.innerHeight;
	winheight = winheight == undefined ? document.documentElement.clientHeight : winheight;

	var scrollpoint = window.scrollY;
	scrollpoint = scrollpoint == undefined ? document.documentElement.scrollTop : scrollpoint;

	if ((scrollpoint + winheight) >= docHeight - f_height) {
		$(".quick").addClass('rel')
	} else {
		$(".quick").removeClass('rel')
	}	
};
```

### 설명
푸터 높이에서 .quick에 rel클래스를 붙여서 
```css
.quick{position:fixed;bottom:0;}
.quick{position:absolute;bottom:100px;}
```
로 변경
