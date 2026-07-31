# input checkbox,checkAll

## input 체크박스 전체 체크 

### html
```html
<input type="checkbox" name="agree_chk" id="chk_all" onclick="toggleAll(this)">
<label for="chk_all">전체 내용을 확인하였으며 이에 동의합니다.</label>

<input type="checkbox" name="agree_chk" id="chk01" onclick="checkSelectAll()">
<label for="chk01">개인 정보수집 및 이용에 관한 사항에 동의합니다.</label>
```

### js
```js
function toggleAll(selectAll) {
    const checkboxes = document.querySelectorAll('input[name="agree_chk"]:not(#chk_all)');
    checkboxes.forEach(checkbox => {
      checkbox.checked = selectAll.checked;
    });
  }

  function checkSelectAll() {
    const checkboxes = document.querySelectorAll('input[name="agree_chk"]:not(#chk_all)');
    const selectAll = document.getElementById('chk_all');

    let allChecked = true;
    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        allChecked = false;
      }
    });

    selectAll.checked = allChecked;
  }
```
