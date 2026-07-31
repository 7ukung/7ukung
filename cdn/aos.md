# AOS(Animate On Scroll)

## aos 애니메이션


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
```

### data-aos(애니메이션 종류)
| 값          | 설명       |
| ---------- | -------- |
| fade       | 서서히 나타남  |
| fade-up    | 아래 → 위   |
| fade-down  | 위 → 아래   |
| fade-left  | 오른쪽 → 왼쪽 |
| fade-right | 왼쪽 → 오른쪽 |
| zoom-in    | 확대되며 나타남 |
| zoom-out   | 축소되며 나타남 |
| flip-left  | 좌측으로 회전  |
| flip-right | 우측으로 회전  |

### data-aos-offset(애니메이션이 시작되는 위치) 
data-aos-offset="100" : 요소가 뷰포트 안으로 100px 들어왔을 때 실행

### data-aos-duration(애니메이션 시간(ms)) 
1000ms = 1초

### 기타 옵션
- data-aos-delay="300" : 0.3초 기다렸다가 실행
- data-aos-easing="ease-in-out"
- data-aos-once="true" : 한 번만 실행 (다시 스크롤해도 재실행 안 함)
- data-aos-mirror="true" : 위로 스크롤할 때도 반대로 애니메이션 적용

