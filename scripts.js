document.addEventListener('DOMContentLoaded', function() {
  const bouncingText = document.querySelector('.bouncing-text');

  bouncingText.addEventListener('mouseover', function() {
    bouncingText.style.animationPlayState = 'paused';
  });

  bouncingText.addEventListener('mouseout', function() {
    bouncingText.style.animationPlayState = 'running';
  });
});
