# Scroll Lock for Layer Popup

## 레이어팝업 fadeIn 되면 뒷배경 스크롤 막기
### js
```js
$('.btn').click(function(){
	$('html, body').css(
		'overflow',
		$('html').css('overflow') === 'hidden' ? 'visible' : 'hidden'
	);
	if ($(this).hasClass('on')) {
        lenis.stop();
    } else {
        lenis.start();
    }
});
```
