# Observer
## 마우스 휠 애니메이션

### html
```html
<div class="con02">
		<div class="inner">
			<div class="box_wrap">
				<div class="box">
					
				</div><!-- box -->
				
				<div class="box">
				
				</div><!-- box -->
				
				<div class="box">
					
				</div><!-- box -->
			</div><!-- box_wrap -->
		</div><!-- inner -->
	</div><!-- con02 -->
```
### css
```css
.con02 .box_wrap{display: flex;width: 300%;}
.sub0101_wrap .con02 .box_wrap .box{width: calc(100% / 3);flex-shrink: 0;}
```

###js
#### gsap 버전 맞추기
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Observer.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollToPlugin.min.js"></script>
```

```js
gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin);

const boxWrapSel = ".con02 .box_wrap";
const boxes = gsap.utils.toArray(".con02 .box_wrap .box");
const total = boxes.length;

let currentIndex = 0;
let animating = false;
let observer;

// 1. pin만 담당 (scrub, animation 없음)
const st = ScrollTrigger.create({
  trigger: ".con02",
  start: "top top",
  end: "+=100%", // pin 유지 구간 (임의값, 이 안에서 실제 이동은 Observer가 처리)
  pin: true,
  onEnter: () => observer.enable(),
  onEnterBack: () => observer.enable(),
  onLeave: () => observer.disable(),
  onLeaveBack: () => observer.disable()
});

// 2. 인덱스 기준으로 박스 이동 (스크롤량과 무관, 항상 한 칸씩)
function goTo(index) {
  gsap.to(boxWrapSel, {
    xPercent: -100 * index / total,
    duration: 0.6,
    ease: "power2.inOut",
    onComplete: () => { animating = false; }
  });
}

// 3. 휠 이벤트 한 번 = 한 칸 이동
observer = Observer.create({
  target: window, // ".con02" 대신 window로 변경
  type: "wheel,touch",
  tolerance: 10,
  preventDefault: true,
  onDown: () => {
    if (animating) return;
    if (currentIndex === total - 1) {
      observer.disable();
      gsap.to(window, { scrollTo: st.end + 5, duration: 0.5, onComplete: () => observer.enable() });
      return;
    }
    animating = true;
    currentIndex++;
    goTo(currentIndex);
  },
  onUp: () => {
    if (animating) return;
    if (currentIndex === 0) {
      observer.disable();
      gsap.to(window, { scrollTo: st.start - 5, duration: 0.5, onComplete: () => observer.enable() });
      return;
    }
    animating = true;
    currentIndex--;
    goTo(currentIndex);
  }
});
```
