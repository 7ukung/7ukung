# Swiper coverflow_slide

## html
```html
<div id="wrap">
  <div class="s_visual">
    <div class="mid">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="">
              <div class="imgBx"><p>test</p><img src="https://picsum.photos/id/10/953/486" alt=""></div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="">
              <div class="imgBx"><p>test</p><img src="https://picsum.photos/id/20/953/486" alt=""></div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="">
              <div class="imgBx"><p>test</p><img src="https://picsum.photos/id/30/953/486" alt=""></div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="" target="_blank">
              <div class="imgBx"><p>test</p><img src="https://picsum.photos/id/40/953/486" alt=""></div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="">
              <div class="imgBx"><p>test</p><img src="https://picsum.photos/id/50/953/486" alt=""></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## css
```css
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #0e0e0e;
    color: #eee;
    font-family: -apple-system, BlinkMacSystemFont, 'Malgun Gothic', sans-serif;
  }

  #wrap { padding: 60px 2.6%; }

  .s_visual .mid {
    text-align: center;
  }

  /* Swiper 컨테이너: 좌우 슬라이드가 잘리지 않도록 overflow 허용 */
  .s_visual .mySwiper {
    width: 100%;
    padding: 40px 0 60px;
  }

  .s_visual .swiper-slide {
    width: 62%;
    max-width: 1192px;
  }

  .s_visual .swiper-slide .imgBx {
    position: relative;`
    border-radius: 4px;
    overflow: hidden;
  }
  .s_visual .swiper-slide .imgBx::before {
    content: '';
    display: block;
    padding-bottom: calc(486 / 953 * 100%); /* 원본과 동일한 비율 유지 */
  }
  .s_visual .swiper-slide .imgBx img {
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    .s_visual .swiper-slide { width: 84%; }
  }
```

## js  
```html
<!-- 버전 맞추기 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@5/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@5/swiper-bundle.min.js"></script>
```
```js
 // 스와이퍼 인스턴스 1개 + 내장 coverflow effect로
  // 가운데 슬라이드는 정면, 양옆 슬라이드는 회전 + 축소되는 효과를 그대로 구현.
  // 기존처럼 슬라이드를 복제하거나 3개의 스와이퍼를 서로 동기화할 필요가 없음.
  var visualSwiper = new Swiper('.s_visual .mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    speed: 1200,
    coverflowEffect: {
      rotate: -38,      // 옆 슬라이드 회전 각도 (기존 rotateY(38deg)와 대응)
      stretch: 0,
      depth: 400,       // 옆으로 갈수록 멀어지는 깊이감
      modifier: 1,
      slideShadows: false,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });

  //진입 모션
  gsap.from('.s_visual .swiper-slide', {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'back',
	stagger:.2
  });
```
  
