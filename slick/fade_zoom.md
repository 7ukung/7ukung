# 클래스 부여해서 이미지 확대 애니메이션

## js
```js
var $visual = $('.visual');

$visual.on('beforeChange', function(event, slider, currentSlide, nextSlide){
  // 다음에 보여질 슬라이드는 미리 확대 상태를 초기화해둔다 (안 보이는 시점이라 티 안남)
  $(slider.$slides[nextSlide]).find('.pc_img').removeClass('zoom');
});

$visual.on('afterChange', function(event, slider, currentSlide){
  // 현재 슬라이드가 활성화된 직후부터 확대 애니메이션 시작
  $(slider.$slides[currentSlide]).find('.pc_img').addClass('zoom');
});

$visual.slick({
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 1400,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  dots: true
});

// 초기 첫 슬라이드도 zoom 클래스 부여
$visual.find('.slick-slide.slick-active .pc_img').addClass('zoom');
```

## css
```css
#visual_wrap li > p.zoom{animation:visAni01 8s linear forwards;}
@keyframes visAni01 {
0%{}
100%{transform:scale(1.2)}
}

```
