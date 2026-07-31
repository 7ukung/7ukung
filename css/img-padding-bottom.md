# Padding-bottom을 사용한 이미지 정렬

## 비례값계산기로 이미지 비율을 계산해서 padding-bottom에 넣기 
### 이미지를 박스 사이즈 안에 가운데 정렬하는 css
```css
.img_wrap{position:relative; width:100%; padding-bottom:56.25%;}
img{position:absolute; left:0; right:0; top:0; bottom:0; margin:auto; width:auto; height:auto; max-width:100%; max-height:100%;}
```

### 이미지를 박스 사이즈에 맞게(꽉차게) object-fit을 사용한 css
```css
.img_wrap{position:relative; width:100%; padding-bottom:56.25%;}
img{position:absolute; left:0; right:0; top:0; bottom:0; margin:auto; width:100%; height:100%; max-width:100%; max-height:100%; object-fit:cover;}
```
