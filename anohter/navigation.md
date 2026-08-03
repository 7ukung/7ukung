# Navigation Menu

## html
```html
<div class="navigation">
	<div class="lnb">
		<h3 class='<?=($pageLoc['page_loc1']=="sub01")?" on":"";?>'><a href="#none"><span>depth01</span></a></h3>
		<ul>
			<li <?=($pageLoc['page_loc2'] == "sub01_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub01')?>">depth02</a></li>
			<li <?=($pageLoc['page_loc2'] == "sub01_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub02')?>">depth02</a></li>
			<li <?=($pageLoc['page_loc2'] == "sub01_sub03")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub03')?>">depth02</a></li>
		</ul>
		
		<h3 class='<?=($pageLoc['page_loc1']=="sub02")?" on":"";?>'><a href="#none"><span>depth01</span></a></h3>
		<ul>
			<li <?=($pageLoc['page_loc2'] == "sub02_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub02_sub01')?>">depth02</a></li>
			<li <?=($pageLoc['page_loc2'] == "sub02_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub02_sub02')?>">depth02</a></li>
			<li <?=($pageLoc['page_loc2'] == "sub02_sub03")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub02_sub03')?>">depth02</a></li>
		</ul>
		
		<h3 class='<?=($pageLoc['page_loc1']=="sub03")?" on":"";?>'><a href="#none"><span>depth01</span></a></h3>
		<ul>
			<li <?=($pageLoc['page_loc2'] == "sub03_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub03_sub01')?>">depth02</a></li>
			<li <?=($pageLoc['page_loc2'] == "sub03_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub03_sub02')?>">depth02</a></li>
			<li <?=($pageLoc['page_loc2'] == "sub03_sub03")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub03_sub03')?>">depth02</a></li>
		</ul>
	</div><!-- lnb -->
</div><!-- navigation -->

<div class="navi_bg"></div>
```

## js
```js
$('.nav_btn').click(function(){
	$('.navigation').stop(true).fadeToggle('fast');
	$('.navi_bg').stop(true).fadeToggle('fast');
	$(this).toggleClass('on');
	$('#header').toggleClass('nav');
});

$('.navi_bg').click(function(){
	$('.navigation').stop(true).fadeToggle('fast');
	$('.navi_bg').stop(true).fadeToggle('fast');
	$(this).toggleClass('on');
	$('#header').toggleClass('nav');
});
```

## css
```css
.navigation{position:absolute;top: 80px;z-index:5000;width:50%;background-color:#fff;height:100%;display:none;right: 0px;line-height: 1;}
.navigation h3{height:60px;width:100%;}
.navigation h3 a{border-bottom: 1px solid #ddd;}
.navigation h3:nth-child(1) a{border-top: 1px solid #ddd;}
.navigation h3.active a:after,
.navigation h3.on a:after{transform:translateY(-50%) rotate(180deg);}
.navigation h3 a{position: relative;height:60px;width:100%;background-color:#fff;display: flex;align-items: center;padding: 0 20px;color:#222;font-size:16px;font-weight: 400;}
.navigation h3.on a,
.navigation h3.active a,
.navigation h3.hover a{font-weight: 500;}
.navigation h3 a:after{content:"";position: absolute;top: 50%;transform:translateY(-50%);right: 20px;width: 13px;height: 8px;background:url(/assets/images/main/nav_arr_tab.png)center no-repeat;background-size:cover ;transition:.3s;}
.navigation ul{display: block; padding:15px 0;background:#f6f6f6;border-bottom: 1px solid #ddd;}
.navigation ul li{margin-bottom: 10px;}
.navigation ul li:last-child{margin-bottom: 0;}
.navigation ul li a{display:flex;height:auto;width:100%;color:#555;font-size:15px;border:none;font-weight: 400;padding-left: 20px; word-break:keep-all;}
.navi_bg{display: none;position: absolute;top: 80px;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.5);z-index: 1000;}
```
