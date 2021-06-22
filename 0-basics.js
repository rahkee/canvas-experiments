// .fillRect(x, y, width, height)
c.fillStyle = 'rgba(255, 0, 0, .5)';
c.fillRect(10, 10, 10, 10);
c.fillStyle = 'rgba(0, 255, 0, .5)';
c.fillRect(20, 20, 20, 20);
c.fillStyle = 'rgba(0, 0, 255, .5)';
c.fillRect(40, 40, 40, 40);

// Line
c.beginPath();
c.moveTo(120, 120);
c.lineTo(240, 240);
c.lineTo(360, 120);
c.strokeStyle = '#fa34a3';
c.stroke();

// Arc & Circle
// c.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise ?: boolean);
c.beginPath();
c.arc(320, 320, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();
