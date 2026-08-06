# Click_images
## 이미지를 클릭하면 대표 이미지가 변경되는 스크립트
### js
```js
document.addEventListener('DOMContentLoaded', function () {
  const mainImg = document.querySelector('대표 이미지');
  const thumbBoxes = document.querySelectorAll('클릭할 이미지');

  thumbBoxes.forEach(function (box) {
    box.addEventListener('click', function () {
      const clickedImg = box.querySelector('img');
      if (clickedImg && mainImg) {
        mainImg.src = clickedImg.src;
        mainImg.alt = clickedImg.alt;
      }
    });
  });
});
```
