# Timeline

## 타임라인 애니메이션 기본

### 코드

```js
var visAni01 = gsap.timeline({
	  scrollTrigger: {
		//trigger: "#visual_wrap",
		pin: false,
		//markers: true,
		scrub: false,
		start: 'top 80%',
    toggleActions: "play reverse play reverse",
	  }
	});

	  visAni02
		.from('#visual_wrap .img_wrap .img01', {y:50,duration: 0.5, ease: 'power3.out',stagger:.2},'<')  

```

### 설명
자주 쓰는 애니메이션

ease: 'power2.out'<br>
ease: 'power3.out'<br>
ease: 'back.out(1.7)'
<br>
<br>
<br>
<br>
<br>
# 반응형

## 해상도에 따라 스크립트 나누기

```js
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
	  
	//vis
	if (window.innerWidth >= 1400) {
	  
	} else if (window.innerWidth >= 768) {

	} else {
		
  	}
});
```


# 공통으로 사용

## 섹션 내 공통 클래스에 공통 애니메이션 적용하기

```js
document.querySelectorAll('.con').forEach((section) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 50%',
      // markers: true,
      scrub: false,
      toggleActions: "play none none reverse"
    }
  });

  tl.from(section.querySelector('.tit02 em'), {opacity:0, y:100, duration:1, ease:'power2.out'})
});
```

# gsap으로 토글 클래스

## 스크롤 트리거로 on클래스 토글하기

```js
document.querySelectorAll('.con02 .box_wrap').forEach((box) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: box,
      start: 'top 50%',
      //markers: true,
      scrub: false,
      toggleActions: "play none none reverse",
      onEnter: () => {
        box.classList.add('on');
      },
      onLeaveBack: () => {
        box.classList.remove('on');
      }
    }
  });
});
```
