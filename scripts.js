document.addEventListener('DOMContentLoaded', function() {
    const bouncingText = document.querySelector('.bouncing-text');

    bouncingText.addEventListener('mouseover', function() {
        bouncingText.style.animationPlayState = 'paused';
    });

    bouncingText.addEventListener('mouseout', function() {
        bouncingText.style.animationPlayState = 'running';
    });

    // Fractal Tree Script
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;

    function draw(startX, startY, len, angle, branchWidth, color1, color2) {
        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = color1;
        ctx.fillStyle = color2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.lineWidth = branchWidth;
        ctx.translate(startX, startY);
        ctx.rotate(angle * Math.PI / 180);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -len);
        ctx.stroke();

        if (len < 10) {
            ctx.restore();
            return;
        }

        draw(0, -len, len * 0.8, angle - 15, branchWidth * 0.8, color1, color2);
        draw(0, -len, len * 0.8, angle + 15, branchWidth * 0.8, color1, color2);

        ctx.restore();
    }

    draw(canvas.width / 2, canvas.height, 120, 0, 10, 'green', 'green');
});
