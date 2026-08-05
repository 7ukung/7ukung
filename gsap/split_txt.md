# Split txt

## js
```js
document.fonts.ready.then(() => {
	let sub0201Split01 = SplitText.create(".con01 .split", {
	  type: "words,lines",
	  mask: "words"
	});

	gsap.from(sub0201Split01.words, {
	  scrollTrigger: {
		trigger: ".con01",   
		start: "top 80%",         
		//markers: true,
	  },
	  y: 50,
	  opacity: 0,
	  duration: 0.7,
	  ease: "back.out(1.2)",
	  stagger: 0.2
	});
});
```

## js
### 공통으로 사용
```js
document.fonts.ready.then(() => {
  document.querySelectorAll('.split').forEach((el) => {
    let split = SplitText.create(el, {
      type: "lines",
      mask: "lines"
    });

    gsap.from(split.lines, {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: "back.out(1.2)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: el.closest('.section'),  
        start: "top 50%",                
        // markers: true
      }
    });
  });
});
```
