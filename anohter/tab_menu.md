# Tab Menu

## html
```html
<div class="tab_menu">
	<div class="inner">
		<a href="/main.php" class="home"></a>
		<ul class="menu">
			<li class="menulink01">
				<a href="#none"><?=$title_text1?></a>
				<ul>
					<li class='<?=($page_loc=="sub01")?" on":"";?>'><a href="/sub01/sub01.php">회사소개</a></li>
					<!-- <li class='<?=($page_loc=="sub02")?" on":"";?>'><a href="/sub02/sub01.php">R&D 사업부문</a></li> -->
					<!-- <li class='<?=($page_loc=="sub03")?" on":"";?>'><a href="/sub03/sub01.php">AI 사업부문</a></li>
					<li class='<?=($page_loc=="sub04")?" on":"";?>'><a href="/sub04/sub01.php">DT 사업부문</a></li>
					<li class='<?=($page_loc=="sub05")?" on":"";?>'><a href="/sub05/sub01.php">DP 사업부문</a></li> -->
					<!-- <li class='<?=($page_loc=="sub06")?" on":"";?>'><a href="/bbs/board.php?tbl=bbs63">커뮤니티</a></li> <a href="/bbs/board.php?tbl=bbs61">커뮤니티</a> 로 되어있는 문구 수정( 소식지로 이동하기) by 서혁택 -->
				</ul>
			</li><!--// menulink	01 -->
			<? if($page_loc=="sub01")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$title_text2?></a>
				<ul>
					<li <?=($PHP_SELF == "/sub01/sub01.php")?"class='on'":"class='#none'";?>><a href="/sub01/sub01.php"><span>회사개요</span></a></li>
					<!-- <li <?=($PHP_SELF == "/sub01/sub02.php")?"class='on'":"class='#none'";?>><a href="/sub01/sub02.php"><span>비전</span></a></li> -->
					<li <?=($PHP_SELF == "/sub01/sub03.php")?"class='on'":"class='#none'";?>><a href="/sub01/sub03.php"><span>연혁</span></a></li>
					<li <?=($PHP_SELF == "/sub01/sub04.php")?"class='on'":"class='#none'";?>><a href="/sub01/sub04.php"><span>조직도</span></a></li>
					<li <?=($PHP_SELF == "/sub01/sub05.php")?"class='on'":"class='#none'";?>><a href="/sub01/sub05.php"><span>오시는 길 </span></a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>

			<? if($page_loc=="sub02")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$title_text2?></a>
				<ul>
					<li <?=($PHP_SELF == "/sub02/sub01.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub01.php"><span>X-Factor 개요</span></a></li>
					<!-- <li <?=($PHP_SELF == "/sub02/sub02.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub02.php"><span>Architecture</span></a></li>
					<li <?=($PHP_SELF == "/sub02/sub03.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub03.php"><span>Data Pipeline N step Fully Plug-in</span></a></li>
					<li <?=($PHP_SELF == "/sub02/sub04.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub04.php"><span>Reader & Extract</span></a></li>
					<li <?=($PHP_SELF == "/sub02/sub05.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub05.php"><span>Analysis</span></a></li>
					<li <?=($PHP_SELF == "/sub02/sub07.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub07.php"><span>X-Factor-ETL</span></a></li> -->
					<li <?=($PHP_SELF == "/sub02/sub06.php")?"class='on'":"class='#none'";?>><a href="/sub02/sub06.php"><span>기대효과</span></a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>
			
			<? if($page_loc=="sub03")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$title_text2?></a>
				<ul>
					<li <?=($PHP_SELF == "/sub03/sub01.php")?"class='on'":"class='#none'";?>><a href="/sub03/sub01.php"><span>Hyperscience</span></a></li>
					<li <?=($PHP_SELF == "/sub03/sub02.php")?"class='on'":"class='#none'";?>><a href="/sub03/sub02.php"><span>AIstation</span></a></li>
				</ul>
			</li><!--// menulink02 -->
			<? } ?>

			<? if($page_loc=="sub04")  { ?>		
			<!-- <li class="menulink02">
				<a href="#none"><?=$title_text2?></a>
				<ul>
					<li <?=($PHP_SELF == "/sub04/sub01.php")?"class='on'":"class='#none'";?>><a href="/sub04/sub01.php"><span>Tanium</span></a></li>
					<li <?=($PHP_SELF == "/sub04/sub02.php")?"class='on'":"class='#none'";?>><a href="/sub04/sub02.php"><span>X-Factor Dashboard</span></a></li>
					<li <?=($PHP_SELF == "/sub04/sub03.php")?"class='on'":"class='#none'";?>><a href="/sub04/sub03.php"><span>X-Factor-Comply</span></a></li>
					 <li <?=($PHP_SELF == "/sub04/sub04.php")?"class='on'":"class='#none'";?>><a href="/sub04/sub04.php"><span>Tatum</span></a></li> 
				</ul>
			</li> --><!--// menulink02 -->
			<? } ?>

			<? if($page_loc=="sub05")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$title_text2?></a>
				<ul>
					<li <?=($PHP_SELF == "/sub05/sub01.php")?"class='on'":"class='#none'";?>><a href="/sub05/sub01.php"><span>Tanium</span></a></li>
					<li <?=($PHP_SELF == "/sub05/sub02.php")?"class='on'":"class='#none'";?>><a href="/sub05/sub02.php"><span>Teradata Vantage</span></a></li>
					<!-- <li <?=($PHP_SELF == "/sub05/sub03.php")?"class='on'":"class='#none'";?>><a href="/sub05/sub03.php"><span>QueryGrid</span></a></li>
					<li <?=($PHP_SELF == "/sub05/sub04.php")?"class='on'":"class='#none'";?>><a href="/sub05/sub04.php"><span>X-Factor-DF</span></a></li> -->
					<!-- <li <?=($PHP_SELF == "/sub05/sub05.php")?"class='on'":"class='#none'";?>><a href="/sub05/sub05.php"><span>X-Factor-ETL</span></a></li> -->
				</ul>
			</li><!--// menulink02 -->
			<? } ?>

			<? if($page_loc=="sub06")  { ?>		
			<li class="menulink02">
				<a href="#none"><?=$title_text2?></a>
				<ul>
					<!-- <li <?=($PHP_SELF == "/sub06/sub01.php" or $Table == "bbs61")?"class='on'":"class='#none'";?>><a href="/bbs/board.php?tbl=bbs61"><span>공지사항</span></a></li>
					<li <?=($PHP_SELF == "/sub06/sub02.php" or $Table == "bbs62")?"class='on'":"class='#none'";?>><a href="/bbs/board.php?tbl=bbs62"><span>FAQ</span></a></li> -->
					<li <?=($PHP_SELF == "/sub06/sub03.php" or $Table == "bbs63")?"class='on'":"class='#none'";?>><a href="/bbs/board.php?tbl=bbs63"><span>소식지</span></a></li>
					<li <?=($PHP_SELF == "/sub06/sub04.php" or $Table == "bbs64")?"class='on'":"class='#none'";?>><a href="/bbs/board.php?tbl=bbs64"><span>자료실</span></a></li>
					<li <?=($PHP_SELF == "/sub06/sub05.php" or $Table == "bbs65")?"class='on'":"class='#none'";?>><a href="/bbs/board.php?tbl=bbs65"><span>갤러리</span></a></li>
					<!-- <li <?=($PHP_SELF == "/sub06/sub06.php" or $Table == "bbs66")?"class='on'":"class='#none'";?>><a href="/sub06/sub06.php"><span>문의하기</span></a></li> -->
				</ul>
			</li><!--// menulink02 -->
			<? } ?>

		</ul><!-- // menu -->
	</div><!-- // inner -->
</div><!-- // tab_menu -->
```

## js
```js
<script>
  $(document).ready(function(){
		$('.tab_menu .menulink01').click(function(){
			$(this).find('ul').stop().slideToggle();
			$(this).toggleClass('on');
			$('.tab_menu .menu > li').not(this).find('ul').slideUp();
			$('.tab_menu .menu > li').not(this).removeClass('on');
		});
		$('.tab_menu .menulink02').click(function(){
			$(this).find('ul').stop().slideToggle();
			$(this).toggleClass('on');
			$('.tab_menu .menu > li').not(this).find('ul').slideUp();
			$('.tab_menu .menu > li').not(this).removeClass('on');
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
.tab_menu {display: block; width:100%; height:70px; background:#fff; border:1px solid #ddd;border-top: none;}
.tab_menu .inner{position:relative; display: flex; height:100%;}
.tab_menu a.home{position: relative;display: block;width: 70px; height: 100%; background: url(/images/sub/tab_home_pc.png)center no-repeat #0081c6; }
.tab_menu .menu {display: flex; width:calc(100%); height:100%;}
.tab_menu .menu > li {position:relative; min-width:318px; height:100%; background:url("/images/sub/tab_bt_pc.png") center right 18px no-repeat; }
.tab_menu .menu > li.on {background-image:url("/images/sub/tab_top_pc.png");}
.tab_menu .menu > li > a {display:flex; align-items:center; padding: 0 20px 0 10px; width:100%; height:100%; font-size: 17px; color:#222; font-weight: 500; line-height:1.2; box-sizing:border-box; word-break:keep-all;border-right: 1px solid #ddd;}
.tab_menu .menu > li ul {display:none; position:absolute; width:100%; top:100%; left:-1px; padding:15px 0; box-sizing:content-box; background-color:#fff; z-index:10;border:1px solid #ddd}
.tab_menu .menu > li ul li ~ li { margin-top:20px;}
.tab_menu .menu > li ul li a {display:flex; align-items:center; position:relative; width:100%; font-size:17px; color:#555;  font-weight: 400;padding:0 10px 0 10px; box-sizing:border-box; line-height:1.2;transition:.3s}
.tab_menu .menu > li ul li a:hover{color: #0081c6;}
```
