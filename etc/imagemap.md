# 이미지맵 (통이미지 변경)
## 좌표 계산 링크 https://www.maschek.hu/imagemap/

### html
```html
<!-- pc -->
		<div class="box01 pc_img">
			<img src="/assets/images/sub/sub0303_img_pc.jpg" alt="" class="map_img" usemap="#image-map">
			<map name="image-map" id="image-map">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('01', 'ar1');" coords="258,69,257,113,648,110,640,337,686,335,682,73,257,68" shape="poly"   class="map01">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('02', 'ar2');" coords="1187,17,894,17,893,246,954,235,949,59,1190,66,1188,18" shape="poly"    class="map02">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('03', 'ar3');" coords="971,159,967,433,1209,436,1210,391,1016,390,1034,156,971,159" shape="poly"  class="map03">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('04', 'ar4');"  coords="242,219,491,224,483,435,412,429,428,261,234,265,242,218" shape="poly"  class="map04">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('05', 'ar12');"  coords="501,392,483,634,283,647,295,692,537,681,559,392,496,390" shape="poly"  class="map05" >
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('06', 'ar16');"  coords="574,418,631,414,614,688,845,693,838,725,573,720,571,417" shape="poly"  class="map06">
			</map>
		</div><!-- box01 -->

		<!-- tab -->
		<div class="box01 tab_img">
			<img src="/assets/images/sub/sub0303_img_tab.jpg" alt="" class="map_img" usemap="#image-map-tab">
			<map name="image-map-tab" id="image-map-tab">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('01', 'ar1');" coords="67,100,766,105,765,510,680,507,701,139,64,154,68,101" shape="poly"   class="map01">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('02', 'ar2');" coords="1095,17,1070,343,1155,346,1136,49,1519,68,1530,8,1095,16" shape="poly"    class="map02">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('03', 'ar3');" coords="1194,217,1279,219,1266,594,1522,591,1528,642,1209,641,1191,226" shape="poly"  class="map03">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('04', 'ar4');"  coords="60,312,56,376,366,387,346,659,445,654,427,337,63,315" shape="poly"  class="map04">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('05', 'ar12');"  coords="472,583,553,582,521,1016,148,1016,152,956,494,965,472,583" shape="poly"  class="map05" >
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('06', 'ar16');"  coords="588,633,676,631,666,1043,1020,1050,1020,1096,589,1087,588,637" shape="poly"  class="map06">
			</map>
		</div><!-- box01 -->

		<!-- mob -->
		<div class="box01 mob_img">
			<img src="/assets/images/sub/sub0303_img_mob.jpg" alt="" class="map_img" usemap="#image-map-mob">
			<map name="image-map-mob" id="image-map-mob">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('01', 'ar1');" coords="19,83,412,84,398,384,329,370,337,141,29,148,26,94" shape="poly"   class="map01">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('02', 'ar2');" coords="486,1,672,0,671,41,589,38,589,287,541,284,548,31,467,27,479,7" shape="poly"    class="map02">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('03', 'ar3');" coords="612,212,618,412,536,430,544,469,713,462,698,428,646,425,672,215,612,211" shape="poly"  class="map03">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('04', 'ar4');"  coords="99,173,271,181,271,228,199,224,211,447,157,441,181,218,99,222,96,183" shape="poly"  class="map04">
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('05', 'ar12');"  coords="224,416,213,653,56,666,55,700,258,698,277,411,228,411" shape="poly"  class="map05" >
				<area target="" alt="" title="" href="javascript:" onclick="areaSel('06', 'ar16');"  coords="287,439,280,724,189,729,191,779,408,775,417,735,312,728,343,435,288,438" shape="poly"  class="map06">
			</map>
		</div><!-- box01 -->

```
### js

```html
<script type="text/javascript" src="/html/script/js/jquery.rwdImageMaps.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery-rwdImageMaps/1.6/jquery.rwdImageMaps.js"></script>
```

```js
//pc
$('.pc_img #image-map area:nth-child(1)').mouseover(function(){
	$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img01_pc.jpg");
});
$('.pc_img #image-map area:nth-child(2)').mouseover(function(){
	$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img02_pc.jpg");
});
$('.pc_img #image-map area:nth-child(3)').mouseover(function(){
	$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img03_pc.jpg");
});
$('.pc_img #image-map area:nth-child(4)').mouseover(function(){
	$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img04_pc.jpg");
});
$('.pc_img #image-map area:nth-child(5)').mouseover(function(){
	$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img05_pc.jpg");
});
$('.pc_img #image-map area:nth-child(6)').mouseover(function(){
	$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img06_pc.jpg");
});


$('.pc_img .map_img').mouseleave(function(){
	if ($('select[name=area] option:selected').val() == '') {
		$('.pc_img .map_img').attr("src","/assets/images/sub/sub0303_img_pc.jpg");
	}
});

//tab
$('.tab_img #image-map-tab area:nth-child(1)').mouseover(function(){
	$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img01_tab.jpg");
});
$('.tab_img #image-map-tab area:nth-child(2)').mouseover(function(){
	$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img02_tab.jpg");
});
$('.tab_img #image-map-tab area:nth-child(3)').mouseover(function(){
	$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img03_tab.jpg");
});
$('.tab_img #image-map-tab area:nth-child(4)').mouseover(function(){
	$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img04_tab.jpg");
});
$('.tab_img #image-map-tab area:nth-child(5)').mouseover(function(){
	$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img05_tab.jpg");
});
$('.tab_img #image-map-tab area:nth-child(6)').mouseover(function(){
	$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img06_tab.jpg");
});


$('.tab_img .map_img').mouseleave(function(){
	if ($('select[name=area] option:selected').val() == '') {
		$('.tab_img .map_img').attr("src","/assets/images/sub/sub0303_img_tab.jpg");
	}
});

$(function(){
	$('img[usemap]').rwdImageMaps();
	$("#image-map-tab").width("100%");
});

//mob
$('.mob_img #image-map-mob area:nth-child(1)').mouseover(function(){
	$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img01_mob.jpg");
});
$('.mob_img #image-map-mob area:nth-child(2)').mouseover(function(){
	$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img02_mob.jpg");
});
$('.mob_img #image-map-mob area:nth-child(3)').mouseover(function(){
	$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img03_mob.jpg");
});
$('.mob_img #image-map-mob area:nth-child(4)').mouseover(function(){
	$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img04_mob.jpg");
});
$('.mob_img #image-map-mob area:nth-child(5)').mouseover(function(){
	$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img05_mob.jpg");
});
$('.mob_img #image-map-mob area:nth-child(6)').mouseover(function(){
	$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img06_mob.jpg");
});


$('.mob_img .map_img').mouseleave(function(){
	if ($('select[name=area] option:selected').val() == '') {
		$('.mob_img .map_img').attr("src","/assets/images/sub/sub0303_img_mob.jpg");
	}
});

//반응형
$(function(){
	$('img[usemap]').rwdImageMaps();
	$("#image-map-mob").width("100%");
});

```

