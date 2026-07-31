# aos 

## aos 애니메이션

`.from()`을 이용해 여러 요소를 동시에 아래에서 위로 등장시키는 예제.

## 코드

```html
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script> 
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

<div data-aos="fade-left" data-aos-offset="100" data-aos-duration="1000" ></div>
```

```js
AOS.init({});
```

## 스크롤 내릴 때 한번만 재생

```js
AOS.init({once:true});
```

## 초기화

```js
$(window).on('load', function(){
  AOS.init();
  setTimeout(function(){
    AOS.refresh();
  }, 500);
});

