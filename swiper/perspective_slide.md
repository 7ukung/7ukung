# perspective_slide

## html
```html
<div id="wrap">
	<div class="s_visual">
		<div class="mid">
			<div class="swiperArea">
				<div class="swiperBx n1">
					<div class="swiper">
						<div class="swiper-wrapper"></div>
					</div>
				</div>
				<div class="swiperBx n2">
					<div class="swiper">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<a href="">
									<div class="imgBx"><img src="/assets/images/main/main_visual03_new_pc.jpg" alt=""></div>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="">
									<div class="imgBx"><img src="/assets/images/main/main_visual02_new_pc.jpg" alt=""></div>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="">
									<div class="imgBx"><img src="/assets/images/main/main_visual01_new_pc.jpg" alt=""></div>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="">
									<div class="imgBx"><img src="/assets/images/main/main_visual03_new_pc.jpg" alt=""></div>
								</a>
							</div>
							<div class="swiper-slide">
								<a href="" target="_blank">
									<div class="imgBx"><img src="/assets/images/main/main_visual02_new_pc.jpg" alt=""></div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="swiperBx n3">
					<div class="swiper">
						<div class="swiper-wrapper"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```
## js
```js
gsap.registerPlugin(ScrollTrigger);


	$(function () {
		$('header').addClass('leftShow');
		
		const ww = $(window).width();

		// 슬라이드갯수가 5개이상부터 오류가 나지 않아서 갯수를 확인하고 부족하면 복사하여 붙여넣기
		let sliderWrap = $('.s_visual .mid .swiperBx.n2 .swiper-wrapper');
		let slides = sliderWrap.find('.swiper-slide');
		let slideCount = slides.length;

		if(slideCount < 10){
			while(sliderWrap.find('.swiper-slide').length < 10) {
				slides.clone().appendTo(sliderWrap);
			}
		}

		// 그대로 복사
		let n2SlidesHtml = sliderWrap.html();

		$('.s_visual .swiperBx.n1 .swiper-wrapper').html(n2SlidesHtml);
		$('.s_visual .swiperBx.n3 .swiper-wrapper').html(n2SlidesHtml);

		// 양옆 슬라이드 순서를 당기고 밀어야함(스와이퍼 옵션으로 하면 오류나서 직접 옮김)
		let n1Wrapper = $('.s_visual .swiperBx.n1 .swiper-wrapper');
		n1Wrapper.append(n1Wrapper.children().slice(0, 3));
		let n3Wrapper = $('.s_visual .swiperBx.n3 .swiper-wrapper');
		n3Wrapper.prepend(n3Wrapper.children().slice(-3));


		// 마지막에 슬라드 갯수 한번더 확인
		var finalSlideLength = sliderWrap.find('.swiper-slide').length ;

		// 공통 옵션
		var visualSwiper = {
			speed: 1200,
			loop: true,
			centeredSlides: true,
			// loopedSlides: finalSlideLength - 1,
			// loopAdditionalSlides: finalSlideLength - 1,
			breakpoints:{
				//500:{
				//	slidesPerView:1.2,
				//},
				0:{
					slidesPerView:1,
				},
			}
		};

		// 스와이퍼 생성
		var swiper_01 = new Swiper('.s_visual .swiperBx.n1 .swiper', {
			...visualSwiper,
		});

		var swiper_02 = new Swiper('.s_visual .swiperBx.n2 .swiper', {
			...visualSwiper,
		});

		var swiper_03 = new Swiper('.s_visual .swiperBx.n3 .swiper', {
			...visualSwiper,
		});

		// 맨처음 자동재생
		setTimeout(function(){

    swiper_02.slideNext();

    if(swiper_02.autoplay){
        swiper_02.autoplay.start();
    }

},1600)


		// 마우스로 클릭할때마다 슬라이드 연동설정 변경(그냥해두면 오류남... 그래서 그때그대 바꾸는것)
		swiper_01.controller.control = null;
		swiper_02.controller.control = [swiper_01, swiper_03];
		swiper_03.controller.control = null;

		let autoPlayTimeOut = null;
		let pointerIdx = null;

		$(document).on('pointerdown', function (e) {
			const bx = $(e.target).closest('.swiperBx');
			const idx = $('.s_visual .swiperBx').index(bx);

			swiper_02.autoplay.stop();

			// 터치하고 3초있다가 다시 자동재생 실행
			clearTimeout(autoPlayTimeOut)
			autoPlayTimeOut = setTimeout(function(){
				swiper_01.controller.control = null;
				swiper_02.controller.control = [swiper_01, swiper_03];
				swiper_03.controller.control = null;
				// 오토 플레이 한개만 적용해야 오류안남 원인은 모르겠음
				swiper_02.autoplay.start();
			},3000)

			// 대상이 .swiperBx 이 아니면 리턴 || 이전에 클릭한거랑 같은거면 무시
			if (!bx.length || pointerIdx == idx) return;

			pointerIdx = idx

			if(pointerIdx === 0) {
				swiper_01.controller.control = [swiper_02, swiper_03];
				swiper_02.controller.control = null;
				swiper_03.controller.control = null;
			}

			if(pointerIdx === 1) {
				swiper_01.controller.control = null;
				swiper_02.controller.control = [swiper_01, swiper_03];
				swiper_03.controller.control = null;
			}

			if(pointerIdx === 2) {
				swiper_01.controller.control = null;
				swiper_02.controller.control = null;
				swiper_03.controller.control = [swiper_01, swiper_02];
			}

		});
		
	});

	// 진입시 모션
		gsap.timeline()
		.from('.s_visual .mid .swiperBx .swiper',{opacity:0,y:100,stagger:0.4,duration:1,ease:'back'},0.2)

	$(window).on('load',function(){
		ScrollTrigger.refresh();
	})
```
## css
```css
#wrap{padding: 0 2.6%;}
.s_visual .mid { text-align: center; padding-top: 20px; padding-bottom: 40px; }
.s_visual .mid .swiperArea {box-sizing: border-box; font-size: 1px;display: inline-flex; align-items: center; justify-content: center; gap: 34em; position: relative;padding: 0 34em; box-sizing: border-box; perspective: 1000em; }

.s_visual .mid .swiperBx { width: 1192em; overflow: hidden;}
.s_visual .mid .swiperBx.n1 { position: absolute; right: 100%; transform-origin: center right; transform: rotateY(-38deg); }
.s_visual .mid .swiperBx.n3 { position: absolute; left: 100%; transform-origin: center left; transform: rotateY(38deg); }
.s_visual .mid .swiperBx .swiper { width: 100%; height: 100%; overflow: visible; padding-bottom: 44px; padding-top: 20px; box-sizing: border-box; }
.s_visual .mid .swiperBx .swiper-wrapper { align-items: center; }
.s_visual .mid .swiperBx .swiper-slide { padding: 0 max(17em,10px); box-sizing: border-box; height: auto; }

.s_visual .mid .swiperBx .swiper-slide a .imgBx {position: relative;}
.s_visual .mid .swiperBx .swiper-slide a .imgBx::before {content:''; display: block; padding-bottom: calc(486/953 * 100%); }
.s_visual .mid .swiperBx .swiper-slide a .imgBx img {position: absolute; left: 0; top: 0; width: 100%; height: 100%; object-fit: cover;}

@media screen and (max-width:1880px) {
	.s_visual .mid .swiperArea{font-size: calc(1/1880 * 100vw); }
}

@media screen and (max-width:1280px) {
	.s_visual .mid .swiperBx .swiper{padding-top: 14px; padding-bottom: 20px;}
}
@media screen and (max-width:1024px) {
	.s_visual .mid .swiperArea{font-size: calc(0.62/1024 * 100vw); }
	.s_visual .mid .swiperBx.n1{transform: rotateY(-46deg);}
	.s_visual .mid .swiperBx.n3{transform: rotateY(46deg);}

}
@media screen and (max-width:820px) {

}
@media screen and (max-width:500px) {
	.s_visual .mid{padding-bottom: 20px;}
	.s_visual .mid .swiperArea{font-size: calc(0.36/500 * 100vw); }
	.s_visual .mid .swiperBx .swiper{padding-top: 10px; padding-bottom: 10px;}

}

```
