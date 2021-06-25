let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined,
};

let circleArray = [];

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

    for (let i = 0; i < Math.random() * 10; i++) {
        // Circle properties
        let radius = Math.random() * 1;
        let radiusGrow = Math.random();
        // Starting positions
        let x = Math.random() * (mouse.x + 5 - (mouse.x - 5)) + mouse.x - 5;
        let y = Math.random() * (mouse.y + 5 - (mouse.y - 5)) + mouse.y - 5;
        // Velocities
        let dx = Math.random();
        let dy = Math.random() - 5;

        circleArray.push(new Circle(x, y, dx, dy, radius, radiusGrow));
    }
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Class Object: Circle
function Circle(x, y, dx, dy, radius, radiusGrow) {
    let colorArray = [
        '#132a13',
        '#004b23',
        '#008000',
        '#70e000',
        '#ccff33',
        '#ffff3f',
    ];

    // let colorArray = [
    //     '#6d6875',
    //     '#03071e',
    //     '#d00000',
    //     '#e85d04',
    //     '#faa307',
    //     '#ffba08',
    // ];

    // Circle properties
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.radius = radius;
    this.radiusGrow = radiusGrow;
    this.maxRadius = 30;
    this.minRadius = 0;

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
        c.globalAlpha = 0.1;
        c.fill();
    };

    this.update = function () {
        // Movement
        this.x += this.dx;
        this.y += this.dy;

        if (radius <= this.maxRadius) {
            this.radius += radiusGrow;
        }

        if (this.radius <= 30 && this.radius > 25) {
            this.color = colorArray[1];
        } else if (this.radius <= 24 && this.radius > 20) {
            this.color = colorArray[2];
        } else if (this.radius <= 20 && this.radius > 15) {
            this.color = colorArray[3];
        } else if (this.radius <= 15 && this.radius > 10) {
            this.color = colorArray[4];
        } else if (this.radius <= 10 && this.radius > 5) {
            this.color = colorArray[Math.floor(Math.random() * (5 - 2) + 2)];
        } else if (this.radius <= 5) {
            this.color = colorArray[Math.floor(Math.random() * (6 - 3) + 3)];
        }

        // Interactivity
        // if (
        //     mouse.x - this.x < 50 &&
        //     mouse.x - this.x > -50 &&
        //     mouse.y - this.y < 50 &&
        //     mouse.y - this.y > -50
        // ) {
        //     if (this.radius < this.maxRadius) {
        //         this.radius += 3;
        //     } else if (this.radius > this.minRadius) {
        //         this.radius -= 0.5;
        //     }
        // }

        this.draw();
    };
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();