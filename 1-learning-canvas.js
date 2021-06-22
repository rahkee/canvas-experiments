let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined,
};

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('touchmove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

// Class Object: Circle
function Circle(x, y, dx, dy, radius) {
    let colorArray = ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'];

    // Circle properties
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.radius = radius;
    this.maxRadius = 30;
    this.minRadius = 2;

    // Starting positions
    this.x = x;
    this.y = y;
    // Velocities
    this.dx = dx;
    this.dy = dy;

    // Methods
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    };

    this.update = function () {
        // Collision detection
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Movement
        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (
            mouse.x - this.x < 50 &&
            mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 &&
            mouse.y - this.y > -50
        ) {
            if (this.radius < this.maxRadius) {
                this.radius += 3;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 0.5;
        }

        this.draw();
    };
}

let circleArray = [];

for (let i = 0; i < 500; i++) {
    // Circle properties
    let radius = Math.random() * 10 + 1;
    // Starting positions
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    // Velocities
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
