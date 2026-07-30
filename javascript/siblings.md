# Siblings

## 형제요소

### 코드

```js
$('.con03 .img_wrap').click(function(){
	$(this).toggleClass('on');
	$(this).siblings().removeClass('on');
});
```

### Vanilla JS

```js
document.querySelectorAll('.exp_pop_wrap .pop_x_btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.exp_pop_wrap').forEach(function(pop) {
      pop.style.transition = 'opacity 0.3s ease';
      pop.style.opacity = '0';
      setTimeout(function() {
        pop.style.display = 'none';
      }, 300); 
    });
  });
});
```

### 이외 까먹어서 잘 안쓰는 코드들...
closest() <br>
find()<br>
...
