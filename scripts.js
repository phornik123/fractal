const canvas = document.getElementById('mandalaCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let angleOffset = 0;

function drawMandala() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2;

    for (let radius = 10; radius < maxRadius; radius += 20) {
        for (let angle = 0; angle < 360; angle += 15) {
            const adjustedAngle = (angle + angleOffset) * Math.PI / 180;
            const x = centerX + radius * Math.cos(adjustedAngle);
            const y = centerY + radius * Math.sin(adjustedAngle);

            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${angle + angleOffset}, 100%, 50%)`;
            ctx.fill();
        }
    }
}

function animateMandala() {
    drawMandala();
    angleOffset += 1;
    requestAnimationFrame(animateMandala);
}

animateMandala();
