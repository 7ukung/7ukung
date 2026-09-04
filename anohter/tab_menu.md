# Tab Menu

## html
```html
<div class="tab_menu_mob">
	<div class="inner">
		<ul class="menu">
			<li class="menulink01">
				<a href="#none"><?=$titleText['title_text1']?></a>
				<ul>
					<li class='<?=($pageLoc['page_loc1'] == "sub01")?" on":"";?>'><a href="<?=url_to('sub01_sub01')?>">신중년 아지트는</a></li>
					<li class='<?=($pageLoc['page_loc1'] == "sub02")?" on":"";?>'><a href="<?=url_to('sub02_sub01')?>">프로그램</a></li>
					<li class='<?=($pageLoc['page_loc1'] == "sub03")?" on":"";?>'><a href="<?=url_to('sub03_sub01')?>">커뮤니티</a></li>
					<li class='<?=($pageLoc['page_loc1'] == "sub04")?" on":"";?>'><a href="<?=url_to('sub04_sub01')?>">공간대여</a></li>
					<li class='<?=($pageLoc['page_loc1'] == "sub05")?" on":"";?>'><a href="<?=url_to('sub05_sub01')?>">공지사항</a></li>
				</ul>
			</li><!--// menulink	01 -->
			<? if($pageLoc['page_loc1'] == "sub01")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$titleText['title_text2']?></a>
				<ul>
					<li <?=($pageLoc['page_loc2'] == "sub01_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub01')?>">신중년 아지트</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub01_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub02')?>">운영안내</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub01_sub03")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub03')?>">공간소개</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub01_sub04")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub01_sub04')?>">오시는길</a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>
			
			<? if($pageLoc['page_loc1'] == "sub02")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$titleText['title_text2']?></a>
				<ul>
					<li <?=($pageLoc['page_loc2'] == "sub02_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub02_sub01')?>">프로그램 안내</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub02_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub02_sub02')?>">프로그램 신청</a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>
			
			<? if($pageLoc['page_loc1'] == "sub03")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$titleText['title_text2']?></a>
				<ul>
					<li <?=($pageLoc['page_loc2'] == "sub03_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub03_sub01')?>">커뮤니티 지원 안내</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub03_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub03_sub02')?>">커뮤니티 활동</a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>
			
			<? if($pageLoc['page_loc1'] == "sub04")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$titleText['title_text2']?></a>
				<ul>
					<li <?=($pageLoc['page_loc2'] == "sub04_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub04_sub01')?>">이용안내</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub04_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub04_sub02')?>">스터디룸 소개</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub04_sub03")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub04_sub03')?>">온라인 예약</a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>
			
			<? if($pageLoc['page_loc1'] == "sub05")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$titleText['title_text2']?></a>
				<ul>
					<li <?=($pageLoc['page_loc2'] == "sub05_sub01")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub05_sub01')?>">공지사항</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub05_sub02")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub05_sub02')?>">갤러리</a></li>
					<li <?=($pageLoc['page_loc2'] == "sub05_sub03")?"class='on'":"class='#none'";?>><a href="<?=url_to('sub05_sub03')?>">문의게시판</a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>

			

		</ul><!-- // menu -->
	</div><!-- // inner -->
</div><!-- // tab_menu_mob -->

```

## js
```js
<script>
  $(document).ready(function(){
		$('.menulink01').click(function(){
			$(this).find('ul').stop().slideToggle();
			$(this).toggleClass('on');
			$('.menu > li').not(this).find('ul').slideUp();
			$('.tab_menu .menu > li').not(this).removeClass('on');
		});
		$('.menulink02').click(function(){
			$(this).find('ul').stop().slideToggle();
			$(this).toggleClass('on');
			$('.menu > li').not(this).find('ul').slideUp();
			$('.menu > li').not(this).removeClass('on');
		});
		//$('.menulink03').click(function(){
		//	$(this).find('ul').stop().slideToggle();
		//	$(this).toggleClass('on');
		//	$('.menu > li').not(this).find('ul').slideUp();
		//	$('.menu > li').not(this).removeClass('on');
		//});
	});
</script>



```

## css
```css
.tab_menu_mob {display: block;position: absolute;bottom: -30px; width:100%; height:55px; line-height: 1;}
.tab_menu_mob .inner{position:relative; display: flex; height:100%;}
.tab_menu_mob .menu {display: flex; width:calc(100%); height:100%;background:#000; }
.tab_menu_mob .menu > li {position:relative;flex:1; height:100%;}
.tab_menu_mob .menu > li.menulink01::before{content:'';position: absolute; right: 0; top: 50%; transform:translateY(-50%); width: 1px; height: 12px; background: rgba(255,255,255,.3);}
.tab_menu_mob .menu > li::after{content:'';position: absolute; right: 20px; top: 50%; transform:translateY(-50%);width: 10px; height: 6px; background: url(/assets/images/sub/tab_arr_tab.png)center no-repeat; background-size: cover;}
.tab_menu_mob .menu > li > a {display:flex; align-items:center; padding: 0 20px 0 20px; width:100%; height:100%; font-size: 15px; color:#fff; font-weight: 500; line-height:1.2; box-sizing:border-box; word-break:keep-all;}
.tab_menu_mob .menu > li ul {display:none; position:absolute; width:100%; top:100%; left:-1px; padding:20px 0; box-sizing:content-box; background-color:#fff; z-index:10;box-shadow: 4px 4px 8px rgba(0,0,0,.15);}
.tab_menu_mob .menu > li ul li ~ li { margin-top:27px;}
.tab_menu_mob .menu > li ul li a {display:flex; align-items:center; position:relative; width:100%; font-size:14px; color:#666;  font-weight: 400;padding:0 20px; box-sizing:border-box; line-height:1.2;transition:.3s}
.tab_menu_mob .menu > li ul li.on a{color: var(--co01);font-weight: 700;}

```
