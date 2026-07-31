# Gsap 섹션고정

### 반응형 tab부터는 해제
```js
ScrollTrigger.matchMedia({
  "(min-width: 1400px)": function() {

    const wrap = document.querySelector('#section02');
    const left = document.querySelector('#section02 .left');
    const right = document.querySelector('#section02 .right');

    ScrollTrigger.create({
      trigger: wrap,
      start: 'top top',
      pin: left,
      scrub: true,
      markers: true
    });

  }
});
```
