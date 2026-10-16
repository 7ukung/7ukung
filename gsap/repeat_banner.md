# 흘러가는 슬라이드 gsap 

## js
``` js
gsap.to("#section02 .bg_slide li", {
			xPercent: -100,  
			duration: 40,    
			ease: "none",   
			repeat: -1
		});
```

## css
``` css
#section02 .bg_slide{position: absolute;bottom: 0;left: 0;display: flex;width: max-content;z-index: 1;pointer-events: none;z-index: -1;}
#section02 .bg_slide li{flex-shrink: 0;}
#section02 .bg_slide li img{display: block; max-width: none; height: auto;}
```
