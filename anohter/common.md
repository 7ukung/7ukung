# 초기화코드

## css
```css
/* Common **********************************************************************/ 
html,body {width:100%; scroll-behavior: smooth;}
html {overflow-y:scroll; box-sizing:border-box;}
*, *:before, *:after{box-sizing:inherit;}
*{
-webkit-text-size-adjust:none;
-webkit-text-size-adjust - auto | none | N% (default auto)
}
body {word-break:break-all;-ms-word-break:break-all; }
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0; padding:0;}
fieldset,img {border:0px none; vertical-align:top;}
dl,ul,ol,menu,li {list-style:none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after,q:before, q:after {content:''; content:none;}
button {border:0 none; background-color:transparent; cursor:pointer;}
body { background:#fff;}
body,th,td,input,select,textarea,button {font-size:13px; line-height:1.6; font-family: 'Pretendard'; color:#7d7d7d;} 
input, select, textarea, button{vertical-align:middle; }
a:link,a:active,a:visited{color:#7d7d7d; text-decoration:none; border:0px;}
a:hover,a:focus{color:#333; text-decoration:none}

table {border-collapse:collapse; border-spacing:0;}
address,caption,cite,code,dfn,em,var {font-style:normal; font-weight:normal;}
summary, caption, legend, hr {width:0; height:0; font-size: ; line-height: ; overflow: hidden; visibility: hidden; border: none; position:absolute; left:-1000em;}
caption {position:static;}
/* label hidden 처리 */
.invisible, .hide{overflow:hidden; visibility:hidden; width:0; height:0; font-size:0; line-height:0; position:absolute;}
label.invisible{*position:Absolute;}

input:focus,select:focus,textarea:focus{outline:0;}

.center{text-align:center;}
.pc_img {display:block;}
.tab_img {display:none;}
.mob_img {display:none;}
.pc {display:block;}
.tab {display:none;}
.mob {display:none;}


:root {
  --co01: #258ed4;
}

::selection{background: var(--co01);color: #fff;}

/* ==main== */
#wrap{ position: relative; width: 100%; max-width: 100%; /* min-width: 1420px; */ margin: 0 auto; overflow: hidden;word-break: keep-all;}
.inner{width: 100%; margin: 0 auto; max-width:100%;padding: 0px 60px;}
```

## head
```js
<!doctype html>
<html lang="ko">
<head>
<?=csrf_meta()?>

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><!-- 호환성 보기 제거 메타 -->
<meta name="viewport" content="user-scalable=yes, maximum-scale=1.0, minimum-scale=0.25, width=1200">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

<title>Another Web</title>

<!-- ------------------------------------------------------------- [ load_meta - S ] ------------------------------------------------------------- -->
<!-- 사이트 전체 기본 문자셋 지정 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<!-- 캐쉬 사용하지 않음 메타 -->
<meta http-equiv="Cache-Control" content="no-cache"/>
<meta http-equiv="Expires" content="0"/>
<meta http-equiv="Pragma" content="no-cache"/>

<!-- 검색차단 메타 -->
<meta name="robots" content="noindex, nofollow">

<!-- 트위터 관련 메타 -->
<meta name="twitter:title" content="">
<meta name="twitter:image" content="">
<meta name="twitter:description" content="">

<!-- 네이버 사이트 등록 관련 메타 -->
<meta name="naver-site-verification" content=""/>
<meta name="description" content="">
<meta property="og:type" content="website">
<meta property="og:title" content="">
<meta property="og:site_name" content="">
<meta property="og:description" content="">
<meta property="og:image" content="">
<meta property="og:url" content="">
<link rel="canonical" href="">

<!-- ------------------------------------------------------------- [ load_meta - E ] ------------------------------------------------------------- -->

<!-- ------------------------------------------------------------- [ load_css - S ] ------------------------------------------------------------- -->
<link rel="stylesheet" href="/assets/common/css/common.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 공통 CSS 파일 -->
<link rel="stylesheet" href="/assets/common/css/agency_search_bbs.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 매장현황 게시판 스킨 -->
<link rel="stylesheet" href="/assets/common/css/custom_paging.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 커스텀 페이징 전용 CSS -->
<link rel="stylesheet" href="/assets/common/css/calendar-eraser_lim.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 기존 달력 -->
<link rel="stylesheet" href="/assets/common/css/calender_jquery.css?v=<?=AW_JS_VERSION?>" type="text/css">
<!-- ------------------------------------------------------------- [ load_css - E ] ------------------------------------------------------------- -->

<!-- ------------------------------------------------------------- [ load_script - S ] ------------------------------------------------------------- -->
<script type="text/javascript" src="/assets/common/js/javascript.js?v=<?=AW_JS_VERSION?>"></script> <!-- Another Web 솔루션 자바스크립트 function -->
<script type="text/javascript" src="/assets/common/js/jquery-3.6.0.min.js?v=<?=AW_JS_VERSION?>"></script> <!-- jQuery 1.7 압축버젼 -->
<script type="text/javascript" src="/assets/common/js/jquery.easing.min.js?v=<?=AW_JS_VERSION?>"></script> <!-- jQuery 애니메이션 (가속,탄력) 효과관련 추가 스크립트 -->
<script type="text/javascript" src="/assets/common/js/kakao.link.js?v=<?=AW_JS_VERSION?>"></script> <!-- 모바일 카카오톡 링크 관련 -->
<!-- ------------------------------------------------------------- [ load_script - E ] ------------------------------------------------------------- -->

<!-- ------------------------------------------------------------- [ 디자인 CSS 영역 - S ] ------------------------------------------------------------- -->
<link rel="stylesheet" href="/assets/css/style.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 디자인 CSS -->
<link rel="stylesheet" href="/assets/css/style_tab.css?v=<?=AW_JS_VERSION?>" type="text/css"><!-- 디자인 CSS -->
<link rel="stylesheet" href="/assets/css/style_mob.css?v=<?=AW_JS_VERSION?>" type="text/css"><!-- 디자인 CSS -->
<link rel="stylesheet" href="/assets/css/style_ex1.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 추가 CSS -->
<link rel="stylesheet" href="/assets/css/font.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 추가 CSS -->
<link rel="stylesheet" href="/assets/css/skin.css?v=<?=AW_JS_VERSION?>" type="text/css"> <!-- 스킨 CSS -->
<!--<link rel="stylesheet" href="/css/cssreset-context-min.css?v=<?=AW_JS_VERSION?>" type="text/css">--> <!-- 에디터영역 Reset CSS -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/slick.css?v=<?=AW_JS_VERSION?>" type="text/css">
<link rel="stylesheet" href="/assets/css/swiper.min.css?v=<?=AW_JS_VERSION?>" type="text/css">
<script src="https://unpkg.com/lenis@1.1.20/dist/lenis.min.js"></script> 


<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/gsap.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollToPlugin.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script type="text/javascript" src="/assets/css/js/menu.js?v=<?=AW_JS_VERSION?>"></script>
<script type="text/javascript" src="/assets/css/js/slick.min.js?v=<?=AW_JS_VERSION?>"></script>
<script type="text/javascript" src="/assets/css/js/swiper.min.js?v=<?=AW_JS_VERSION?>"></script>

<!-- ------------------------------------------------------------- [ 디자인 CSS 영역 - E ] ------------------------------------------------------------- -->

<!-- new post -->
<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="/assets/js/new_uzip.js?v=<?=AW_JS_VERSION?>"></script><!-- openDaumPostcode -->

<script type="text/javascript" src="/assets/js/reg.js?v=<?=AW_JS_VERSION?>"></script> <!-- 정규식 -->

</head>

<body leftmargin="0" topmargin="0">
	<div id="objContents">
```
