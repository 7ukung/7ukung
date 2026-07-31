# Slick-pagination

## slick 에 pagination 추가하기 (ex. 1/4)

### html

```html
<div class="slide_items slide_items01" data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000">
  <div class="numcount sPage1">
    <span class="now"></span>
    <span class="total"></span>
  </div>
</div><!-- slide01_items -->
```
### js
```js
$('.visual').slick({
  fade: true,
  infinite: true,
  autoplay:true,
  autoplaySpeed:5000,
  speed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow : $('#visual_wrap .prev01'), 
  nextArrow : $('#visual_wrap .next01'), 
});

$('.visual').on('init reInit afterChange', function(event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    var totalSlides = slick.slideCount; 
    $('.slide_items01 .sPage1').html("<span class='now'>" + i + "</span><span class='total'>" + totalSlides + "</span>");
});

$(document).ready(function() {
    $('.visual').slick('setPosition'); 
    var totalSlides = $('.visual').slick('getSlick').slideCount; 
    $('.slide_items01 .sPage1').html("<span class='now'>1</span><span class='total'>" + totalSlides + "</span>");
});
```


