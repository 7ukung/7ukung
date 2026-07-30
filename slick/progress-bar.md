# Slick progress-bar

## slick 에 progress-bar 추가하기

### html

```html
<div class="sec_item">
		<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
    <span class="slider__label sr-only"></span>
  </div>
</div><!-- sec_item -->
```
### js
```js
$('.sec02_con').each(function(){
	var $progressBar01 = $(this).find('.progress');
	var $progressBarLabel01 = $(this).find( '.slider__label');	
	$(this).find('.sec02_slide').on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
		$progressBarLabel01.css('width',calc + '%');
	});
});
```

### css
```css
#section02 .progress { position:relative; width:calc(100%); height:3px; background:#ddd;}
#section02 .progress .slider__label { position:absolute; left:0; top:50%; transform:translateY(-50%); width:0; height:100%; background:#555; transition:0.5s;}
```


