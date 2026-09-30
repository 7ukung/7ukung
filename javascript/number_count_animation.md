# 숫자 카운트 애니메이션 스크립트

```js
//count
setCount('.count01 ', 1300, 100);

function setCount(selector, duration, step) {
	$(selector).each(function() {
		var $selector = $(this);
		var timerId = '';
		var numTarget = parseInt($selector.text());
		var numTargetTh = numTarget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		checkVisibility();
		$(window).on('scroll resize', function() {
			checkVisibility();
		});

		function checkVisibility() {
			var scrollAmt = $(document).scrollTop();
			var minScroll = $selector.offset().top - $(window).height();
			var maxScroll = $selector.offset().top + $selector.outerHeight();
			if (minScroll < scrollAmt && scrollAmt < maxScroll) {
				if ($selector.hasClass('show') !== true) {
					$selector.addClass('show');
					setCount();
				}
			} else {
				$selector.removeClass('show');
				clearInterval(timerId);
				$selector.text(numTargetTh);
			}
		}
		
		function setCount() {
			var numNow = 0;
			var numNowTh = '';
			var numStep = Math.ceil(numTarget / step);
			var speed = Math.ceil(duration / step);

			timerId = setInterval(function() {
				if (numNow > numTarget) {
					$selector.text(numTargetTh);
					clearInterval(timerId);
				} else {
					numNowTh = numNow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
					$selector.text(numNowTh);
					numNow += numStep;
				}
			}, speed);
		}
	});
}
```
