# Lenis

## html
```html
<script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script> 
<link rel="stylesheet" href="https://unpkg.com/lenis@1.1.20/dist/lenis.css">
```

## js
```js
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});


// gsap이랑 같이 쓸 경우
// Initialize Lenis
ScrollTrigger.config({ normalizeScroll: true }); 

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

```

## 내부 스크롤시
```html
<div data-lenis-prevent></div>
```


