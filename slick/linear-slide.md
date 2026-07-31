# Slick 흘러가는 슬라이드

## js
```js
$('.sec02_bg_slide').slick({
    speed: 20000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    infinite: true,
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    draggable: false,
    swipe: false,
    touchMove: false
});
```

## css
```css
#section02 .bg{position: absolute;left: 0;bottom: -40px;z-index: -1;}
#section02 .sec02_bg_slide .slick-track{display:flex;align-items:center;}
#section02 .sec02_bg_slide li{width: 5000px;white-space: nowrap;font-size: 300px; font-weight: 700;color: #f5f5f5;}
```
