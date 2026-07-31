<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<canvas id="myChart" width="600" height="800"></canvas>

<script>
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [{
      data: [4, 5, 3, 5, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2
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
          stepSize: 1
        },
        grid: {
          circular: false // 오각형 유지
        }
      }
    },
    plugins: {
      legend: { display: false }
    }
  },
  plugins: [{
    id: 'polygonBackground',
    beforeDraw(chart) {
      const { ctx, scales } = chart;
      const centerX = scales.r.xCenter;
      const centerY = scales.r.yCenter;
      const maxRadius = scales.r.drawingArea;
      const steps = scales.r.ticks.length - 1; // 레벨 수
      const angles = chart.data.labels.length;
      const angleStep = (Math.PI * 2) / angles;

      const colors = [
        'rgba(255, 230, 230, 0.8)',
        'rgba(230, 255, 230, 0.8)',
        'rgba(230, 230, 255, 0.8)',
        'rgba(255, 255, 200, 0.8)',
        'rgba(255, 220, 255, 0.8)'
      ];

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
        ctx.closePath();
        ctx.fillStyle = colors[i - 1] || colors[colors.length - 1];
        ctx.fill();
      }
      ctx.restore();
    }
  }]
});
</script>
