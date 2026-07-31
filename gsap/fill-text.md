# Scroll trigger로 스크롤 시 text색 채우기

## js
```js
var sec01Ani01 = gsap.timeline({
  scrollTrigger: {
	trigger: "#section01",
	pin: true,
	//markers: true,
	scrub: 2,
	start: 'top top',
  }
});

  sec01Ani01
	.to('#section01 .txt_wrap p', {backgroundSize: "200% 100%", duration: 2.5, ease: 'power1.out' , stagger:1.5})  
```

## css
```css
#section01 .txt_wrap p{font-size: 65px; font-weight: 700;text-align: center; line-height: 90px; -webkit-text-fill-color: rgba(255, 255, 255, 0.2);-webkit-background-clip: text;background-repeat: no-repeat;background-image: linear-gradient(90deg, #fff 0%, #fff 50%, transparent 50.1%);background-size: 0% 100%;}
```
