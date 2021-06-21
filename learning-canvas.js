let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let context = canvas.getContext('2d');

// .fillRect(x, y, width, height)
context.fillRect(10, 10, 10, 10);
context.fillRect(20, 20, 20, 20);
context.fillRect(40, 40, 40, 40);
