const canvas = document.getElementById('mandalaCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMandala() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    for (let i = 0; i < 360; i += 15) {
        const angle = i * Math.PI / 180;
        const x = centerX + 100 * Math.cos(angle);
        const y = centerY + 100 * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `hsl(${i}, 100%, 50%)`;
        ctx.stroke();
    }
}

function animateMandala() {
    drawMandala();
    requestAnimationFrame(animateMandala);
}

animateMandala();
