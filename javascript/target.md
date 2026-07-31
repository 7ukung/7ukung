# Target

## 타겟영역을 제외하고 클릭했을 시 레이어팝업 숨김처리.

```js
$(document).mouseup(function (e){
    var $tgPoint = $(e.target);

    var isInside = $tgPoint.closest('.qr_pop').length; //레이어팝업버튼

    if (!isInside) {
        $('.qr_pop_wrap').fadeOut();
    }
});
```

### 설명
레이어팝업 내부를 제외한 배경을 클릭했을 때 레이어 팝업이 닫히게 만들 때 사용
