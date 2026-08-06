# 마우스 오버 영역 이미지 확대 스크립트
## 참고 사이트 : https://ctrlcccv.github.io/ctrlcccv-demo/2023-12-15-image-zoom/
### html
```html
<div class="slider">
			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s01-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s02-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s03-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s04-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s05-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s06-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s07-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->

			<div class="container">
				<div class="img_wrap">
					<img src="/images/sub/sub0101_s08-1.jpg" alt="이미지" class="img">
				</div>
				<div class="zoom_result"></div>
			</div><!-- container -->
		</div><!-- slider -->

```

### css
```css
.sub0101_new_wrap .con{overflow: hidden;}
.sub0101_new_wrap .slider .img_wrap{width: 326px; height: 326px; border:1px solid #ddd;}
.sub0101_new_wrap .slider .img_wrap img{width: 100%;max-height: 100%;}
.sub0101_new_wrap .slick-list{overflow: visible;padding-bottom: 30px;}

.sub0101_new_wrap .con .container{position:relative;margin-right: 30px;}
.sub0101_new_wrap .con .slider .zoom_lens {display: none;position:absolute;width:150px;height:150px;background: #000;border: 1px solid #fff;opacity: 0.2;z-index: 2;} 
.sub0101_new_wrap .con .slider .zoom_result {display: none;position: absolute;top: 0;right:326px;width:356px;height:356px;z-index: 100;border:1px solid #ef8c00;}
.sub0101_new_wrap .con .slider .slick-active .zoom_result{left:320px;}
.sub0101_new_wrap .con .slider .img_wrap:hover ~ .zoom_result {display: block;}
.sub0101_new_wrap .con .slider .img_wrap:hover .zoom_lens {display: block;}
```

### js
```js
$(function(){
        function imageZoom(imgSelector, resultSelector) {
            const imgContainers = $(imgSelector).closest('.container'); 

            imgContainers.each(function() {
                const imgContainer = $(this);
                const img = imgContainer.find(imgSelector);
                const result = imgContainer.find(resultSelector);
                const lens = $("<a/>", { "class": "zoom_lens" });
                lens.insertBefore(img);

                const cx = result.width() / lens.width();
                const cy = result.height() / lens.height();

                result.css({
                    "backgroundImage": `url(${img.attr('src')})`, 
                    "backgroundSize": `${img.width() * cx}px ${img.height() * cy}px`,
					//"backgroundSize": `cover`,
					"background-repeat": `no-repeat`
                });

                lens.add(img).on('mousemove touchmove', function (e) {
                    e.preventDefault();
                    const pos = getCursorPos(e, img);

                    let x = pos.x - lens.width() / 2;
                    let y = pos.y - lens.height() / 2;
                    x = Math.max(0, Math.min(x, img.width() - lens.width()));
                    y = Math.max(0, Math.min(y, img.height() - lens.height()));

                    lens.css({ left: x, top: y });
                    result.css('backgroundPosition', `-${x * cx}px -${y * cy}px`);
                });
            });
        }

        function getCursorPos(e, img) {
            const imgOffset = img.offset();
            let x = e.pageX - imgOffset.left;
            let y = e.pageY - imgOffset.top;

            if (e.type === 'touchmove') {
                x = e.originalEvent.touches[0].pageX - imgOffset.left;
                y = e.originalEvent.touches[0].pageY - imgOffset.top;
            }

            return { x, y };
        }

        $(window).on('load', function(){
            imageZoom(".img", ".zoom_result");
        });
    });
```
