# 카메라 접근 스크립트 (작업하면서 추가수정 필요)
## html
```html
<div class="con03 camera-wrap">
  <video id="video" autoplay playsinline></video>

  <!-- 프레임 -->
  <img id="frame" src="/assets/images/sub/sub0101_logo.png" class="frame" />

  <canvas id="canvas" style="display:none;"></canvas>

  <!-- 탭 -->
  <div class="frame-tabs">
    <button data-frame="/assets/images/sub/sub0101_logo.png">프레임1</button>
    <button data-frame="/assets/images/main/f_logo_pc.png">프레임2</button>
    <button data-frame="/assets/images/main/main_logo02_pc.png">프레임3</button>
  </div>

  <button id="start">카메라 켜기</button>
  <button id="capture">촬영</button>
  <button id="download">저장</button>
</div>
```

## css
```css
.camera-wrap {
  position: relative;
  width: 300px;
}

video {
  width: 100%;
}

.frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.frame-tabs {
  margin-top: 10px;
}

.frame-tabs button.active {
  background: black;
  color: #fff;
}

```

##js
```js
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const frameElement = document.getElementById("frame");
const frameButtons = document.querySelectorAll(".frame-tabs button");

let stream = null;
let capturedImage = null;

// ✅ 프레임 (한 번만 선언)
const frameImg = new Image();
frameImg.src = frameElement.src;

// ✅ 1. 카메라 켜기
document.getElementById("start").addEventListener("click", async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
    });
    video.srcObject = stream;
  } catch (e) {
    alert("카메라 권한 허용");
    console.error(e);
  }
});

// ✅ 2. 촬영
document.getElementById("capture").addEventListener("click", () => {
  if (video.readyState !== 4) {
    alert("카메라 준비중");
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.save();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);

  ctx.drawImage(video, 0, 0);
  ctx.restore();

  capturedImage = canvas.toDataURL("image/png");
});

// ✅ 3. 저장
document.getElementById("download").addEventListener("click", async () => {
  if (!capturedImage) {
    alert("사진 먼저찍어야함");
    return;
  }

  if (!frameImg.complete) {
    alert("프레임 로딩중");
    return;
  }

  const img = new Image();
  img.src = capturedImage;

  await new Promise(resolve => img.onload = resolve);

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);
  ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

  const finalImage = canvas.toDataURL("image/png");

  const a = document.createElement("a");
  a.href = finalImage;
  a.download = "photo.png";
  a.click();
});

// ✅ 4. 프레임 탭
frameButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const newSrc = btn.dataset.frame;

    frameElement.src = newSrc;   // 미리보기
    frameImg.src = newSrc;       // 저장용

    frameButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

```
