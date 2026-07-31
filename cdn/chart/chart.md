
# Chart.js

## 설명
도형 그래프(차트)

## 코드

```html
<canvas id="myChart"></canvas>
```

```js
const ctx = document.getElementById('myChart').getContext('2d');

const share = <?=$activedSeedCount['S'] ?? 0?>;
const person = <?=$activedSeedCount['P'] ?? 0?>;
const emotion = <?=$activedSeedCount['E'] ?? 0?>;
const question = <?=$activedSeedCount['Q'] ?? 0?>;
const experience = <?=$activedSeedCount['X'] ?? 0?>;

const myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: [
		['Share', '말'],
	    ['Person', '사람'],
	    ['Emotion', '감정'],
	    ['Question', '질문'],
	    ['Experience', '경험']
	],
    datasets: [{
      data: [share, person, emotion, question, experience],
      backgroundColor: 'rgba(127, 255, 0, 0.3)',
      borderColor: '#7fff00',
      borderWidth: 2,
	  pointRadius: 0,  
	  pointHoverRadius: 0
    }]
  },
  options: {
    responsive: true, 
    maintainAspectRatio: false,
    scales: {
      r: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
		  display: false 
        },
        grid: {
          circular: false,
		  lineWidth: 2,
		  color: (ctx) => {
			if (ctx.index === ctx.chart.scales.r.ticks.length - 1) {
			  return '#666'; // 바깥쪽 라인 색
			}
			return '#666';   // 안쪽 라인 색
		  }
        },
		
		//꼭짓점과 가운데 잇는 라인
		angleLines: {
		  display: true,
		  color: '#666',
		  lineWidth: 2
		},
			  
		pointLabels: {
        font: {
          size: 16,     // 크기
          weight: 'bold' // 두께
        },
        color: '#fff',   // 색상
		padding: 10
      }
      }
    },
    plugins: {
      legend: { display: false }
    }
  },
	
  plugins: [
  {
    id: 'polygonBackground',
    beforeDraw(chart) {
      const { ctx, scales } = chart;
      const centerX = scales.r.xCenter;
      const centerY = scales.r.yCenter;
      const maxRadius = scales.r.drawingArea;
      const steps = scales.r.ticks.length - 1; // 레벨 수
      const angles = chart.data.labels.length;
      const angleStep = (Math.PI * 2) / angles;
      
      ctx.save();
      for (let i = steps; i > 0; i--) {
        const radius = (maxRadius / steps) * i;
        ctx.beginPath();
        for (let j = 0; j < angles; j++) {
          const angle = j * angleStep - Math.PI / 2;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          if (j === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
      }
      ctx.restore();
    }
  },
  {
    id: 'showScore',
    afterDatasetsDraw(chart) {
      const { ctx, scales, data } = chart;
      const rScale = scales.r;
      const centerX = rScale.xCenter;
      const centerY = rScale.yCenter;
      const maxRadius = rScale.drawingArea;
	  
	  const fontSize = chart.options.plugins.showScoreFontSize || 16;

      ctx.save();
      ctx.fillStyle = '#8c805f';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const angles = data.labels.length;
      const angleStep = (Math.PI * 2) / angles;
      const dataset = data.datasets[0];

      dataset.data.forEach((value, i) => {
        const angle = i * angleStep - Math.PI / 2;
        const radius = (value - rScale.min) / (rScale.max - rScale.min) * maxRadius;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        //ctx.fillText(value.toFixed(1), x, y - 14); // y-10 하면 점수 위쪽에 표시
      });

      ctx.restore();
    }
  }
]

});

//반응형차트폰트사이즈
function updateFontSize() {
  const width = window.innerWidth;

  if (width < 480) {
    myChart.options.scales.r.pointLabels.font.size = 11;
  } else if (width < 768) {
    myChart.options.scales.r.pointLabels.font.size = 14;
  } else {
    myChart.options.scales.r.pointLabels.font.size = 16;
  }

	let scoreFontSize;
	  if (width < 768) scoreFontSize = 12;
	  else if (width < 1360) scoreFontSize = 14;
	  else scoreFontSize = 16;

	  myChart.options.plugins.showScoreFontSize = scoreFontSize;
	  myChart.update();
	}

window.addEventListener('resize', updateFontSize);

updateFontSize();
```
