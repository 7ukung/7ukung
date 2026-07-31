## header_sub.php
```js
<script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script> 


<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollToPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

## main.php
```js
//lenis
ScrollTrigger.config({ normalizeScroll: true }); 

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

//gsap
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});

gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", (event) => {
gsap.registerPlugin(ScrollTrigger,SplitText)

});//end

//aos
AOS.init({
	once:true
});
```
