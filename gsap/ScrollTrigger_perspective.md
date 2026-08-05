# ScrollTrigger를 사용해 돌아가는 직육면체 만들기

## html
```html
<div id="wrap">

	<div class="spacer">스크롤을 내려보세요 ↓</div>

	<div class="stage">
	  <div class="cube" id="cube">
		<div class="face front"  style="background-image:url('https://picsum.photos/id/10/400');"></div>
		<div class="face back"   style="background-image:url('https://picsum.photos/id/20/400');"></div>
		<div class="face right"  style="background-image:url('https://picsum.photos/id/30/400');"></div>
		<div class="face left"   style="background-image:url('https://picsum.photos/id/40/400');"></div>
		<div class="face top"    style="background-image:url('https://picsum.photos/id/50/400');"></div>
		<div class="face bottom" style="background-image:url('https://picsum.photos/id/60/400');"></div>
	  </div>
	</div>

	<div class="spacer">스크롤이 끝나면 여기서 멈춥니다</div>

</div><!-- wrap -->
```

## css
```css
  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: #111;
    color: #eee;
  }

  .spacer {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #888;
  }

  .stage {
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 3000px;
    overflow: hidden;
  }

  .cube {
    width: 600px;
    height: 400px;
    position: relative;
    transform-style: preserve-3d;
  }

  .face {
    position: absolute;
    width: 600px;
    height: 400px;
    background-size: cover;
    background-position: center;
    border: 2px solid rgba(255,255,255,0.15);
  }

	/* top과 bottom은 translateZ이 height의 절반,
	나머지는 width의 절반으로 설정 */

  .front  { transform: rotateY(0deg)    translateZ(300px); }
  .back   { transform: rotateY(180deg)  translateZ(300px); }
  .right  { transform: rotateY(90deg)   translateZ(300px); }
  .left   { transform: rotateY(-90deg)  translateZ(300px); }
  .top    { transform: rotateX(90deg)   translateZ(200px); } 
  .bottom { transform: rotateX(-90deg)  translateZ(200px); }
```

## js
```js
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#cube", {
    rotateY: -360, //음수 = 왼쪽 방향 회전
    ease: "none",
    scrollTrigger: {
      trigger: ".stage",
      start: "top top",
      end: "bottom top",
      scrub: 1, 
      pin: true,
      // markers: true,
    }
  });
```
