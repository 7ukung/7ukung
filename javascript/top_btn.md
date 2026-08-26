# Top Btn

```js
jQuery(document).ready(function($) {
	  var visible = false;
	  //Check to see if the window is top if not then display button
	  $(window).scroll(function() {
		var scrollTop = $(this).scrollTop()
		if (!visible && scrollTop > 300) {
		  $(".top_btn").fadeIn();
		  visible = true;
		} else if (visible && scrollTop <= 300) {
		  $(".top_btn").hide();
		  visible = false;
		} 
	  });
	  //Click event to scroll to top
	  $(".top_btn").click(function() {
		$("html, body").animate({
		  scrollTop: 0
		}, 700);
		return false;
	  });

	});
```
