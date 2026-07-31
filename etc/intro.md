# Intro 페이지 생성

## 설명
intro.php를 따로 생성하고 n초 뒤 메인으로 이동하기

## 코드

```js
//head.lib 에 생성
<? if($PHP_SELF == "/intro.php" or $PHP_SELF == "/index.php")  { ?>
//7초 뒤 이동
<meta http-equiv="refresh" content="7; url=메인경로"> 
<? }else{ ?>
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
<?}?>
```

### index.php 에서 오픈작업 후 main.php가 아닌 intro.php로 가도록 수정
``` js
<?
	include $_SERVER["DOCUMENT_ROOT"]."/admin/lib/lib.php"; 

	if (is_file("./intro.php")) {
		include "./intro.php";
	} else {
		if(THIS_AEGNT == "mobile"){
			//include "./mobile/main.php";//모바일작업 완료시 주석 해제
			include "./intro.php";
		}else{
			include "./intro.php";
		}
	}
?>
```
