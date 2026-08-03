# Copy button

## html
```html
<strong>주문번호 : <span id="copy_txt">00000000000000000</span>
  <button id="copy_btn">Copy</button>
</strong>
```

## js
```js
document.getElementById("copy_btn").addEventListener("click", function (e) {
    e.preventDefault();

    const text = document.getElementById("copy_txt").innerText;

    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    alert("복사되었습니다.");
});
```
