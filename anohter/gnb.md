# Gnb Menu

## html
```html
<ul class="gnb">
	<li class="lnb_menu">
		<span><a href="<?=url_to('sub01_sub01')?>">DION ENERGY</a></span>
		<div class="lnb_sub">
			<ul class="sub_menu">
				<li><a href="<?=url_to('sub01_sub01')?>">About Us</a></li>
				<li><a href="<?=url_to('sub01_sub02')?>">History</a></li>
				<li><a href="<?=url_to('sub01_sub03')?>">IPR</a></li>
			</ul>
		</div><!-- lnb_sub -->
	</li><!-- lnb_menu -->
	
	<li class="lnb_menu">
		<span><a href="<?=url_to('sub02_sub01')?>">Business Area</a></span>
		<div class="lnb_sub">
			<ul class="sub_menu">
				<li><a href="<?=url_to('sub02_sub01')?>">Smart city</a></li>
				<li><a href="<?=url_to('sub02_sub02')?>">Military</a></li>
				<li><a href="<?=url_to('sub02_sub03')?>">Mobility</a></li>
				<li><a href="<?=url_to('sub02_sub04')?>">Aerospace</a></li>
			</ul>
		</div><!-- lnb_sub -->
	</li><!-- lnb_menu -->
	
	<li class="lnb_menu">
		<span><a href="<?=url_to('sub03_sub01')?>">Product</a></span>
		<div class="lnb_sub">
			<ul class="sub_menu">
				<li><a href="<?=url_to('sub03_sub01')?>">Lithium Primary Battery</a></li>
				<li><a href="<?=url_to('sub03_sub02')?>">Lithium ion battery </a></li>
				<li><a href="<?=url_to('sub03_sub03')?>">Customized Pack</a></li>
				<li><a href="<?=url_to('sub03_sub04')?>">Military Pack</a></li>
			</ul>
		</div><!-- lnb_sub -->
	</li><!-- lnb_menu -->
	
	<li class="lnb_menu">
		<span><a href="<?=url_to('sub04_sub01')?>">Contact Us</a></span>
	</li><!-- lnb_menu -->

</ul>
```
## js
```js
<script type="text/javascript">
	$('.gnb > li').on('mouseenter',function(){
		$('#header').addClass('on');
		$(this).addClass('on');
		$(this).find('.sub_menu').stop(true).slideDown();
	});
	$('.gnb > li').on('mouseleave',function(){
		$('#header').removeClass('on');
		$(this).removeClass('on');
		$(this).find('.sub_menu').stop(true).slideUp();
	});
</script>
```

## css
```css
#header .gnb{display: flex;}
#header .gnb > li{position: relative;padding: 41px 58px;}
#header .gnb span a{display: block;font-size: 16px; color: #222; font-weight: 500;}
#header .gnb .lnb_sub{position: absolute; top: 97px; left: 50%; transform:translateX(-50%);z-index: 100; width: 240px; background: rgba(0,0,0,.5);}
#header .gnb .lnb_sub ul{display: none;padding: 30px 0px;border-top: 4px solid #962c31;}
#header .gnb .lnb_sub ul li a{display: block;color: #fff;font-size: 16px;text-align: center;300}
#header .gnb .lnb_sub ul li:not(:last-child){margin-bottom: 20px;}
```
