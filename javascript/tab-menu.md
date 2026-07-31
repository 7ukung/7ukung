# Tab-menu / slick-slide

## html
```html
<div class="tab-menu-wrap">
  <a style="cursor:pointer;">메뉴1</a>
  <a style="cursor:pointer;">메뉴2</a>
</div><!-- tab-menu-wrap -->

<div class="tab-container">
  <div class="tab-con">
    
  </div><!-- tab-con -->

</div><!-- tab-container -->
```

## Tab-menu js
```js
function tabMenu(target) {
    const $tabMenu = $(target).find('.tab-menu-wrap a');
    const $tabCon = $(target).find('.tab-container .tab-con');

    $tabMenu.eq(0).addClass('on');
    $tabCon.hide().eq(0).show();

    $tabMenu.on('click', function (e) {
        e.preventDefault();

        const idx = $(this).index();

        $tabMenu.removeClass('on').eq(idx).addClass('on');
        $tabCon.hide().eq(idx).show();

        // 숨겨져 있던 슬릭 레이아웃 다시 계산
        $tabCon.eq(idx).find('.sec03_slide').slick('setPosition');
    });
}

tabMenu('#section03');
```

## slick js
```js
function initSlick(target) {
    $(target).each(function () {
        const $slide = $(this);

        if (!$slide.hasClass('slick-initialized')) {
            $slide.slick({
                infinite: true,
				autoplay:true,
                slidesToShow: 5,
                slidesToScroll: 1,
				pauseOnHover:false,
				pauseOnFocus:false,
                //prevArrow: $slide.closest('.tab-con').find('.sec03_prev'),
                //nextArrow: $slide.closest('.tab-con').find('.sec03_next')
            });
        }
    });
}

initSlick('#section03 .sec03_slide');
```

### 설명
슬릭 안쓰고 탭메뉴만 사용할 땐 tab-menu js에서 slick 부분 삭제. <br>
<br>
여러 section에서 사용한다면<br>
<br>
tab-menu js에 <br>
tabMenu('#section03');<br>
tabMenu('#section04');<br>
tabMenu('#section05');<br>
...<br>
<br>
slick js에 <br>
initSlick('#section03 .sec03_slide');<br>
initSlick('#section04 .sec03_slide');<br>
initSlick('#section05 .sec03_slide');<br>
...<br>
<br>
추가하거나<br>
<br>
공통클래스 주고<br>
tabMenu('.section');<br>
initSlick('.sec03_slide');<br>
쓰면 됨


