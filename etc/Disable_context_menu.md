# 마우스 우클릭, 드래그 방지

## 방법1

### body에 넣어서 전체 페이지에 적용
```html
//contextmenu="return false"       우클릭 방지
//ondragstart="return false"         드래그 방지
//onselectstart="return false"       선택 방지
<body  oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
```

## 방법2

### 페이지마다 혹은 main,footer에 넣어서 개별 적용
```js
$(document).ready(function(){
  $(document).bind("contextmenu", function(e) {
  return false;
  });
});
$(document).bind('selectstart',function() {return false;}); 
$(document).bind('dragstart',function(){return false;}); 
```
