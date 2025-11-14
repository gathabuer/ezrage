const dot = document.querySelector('.cursor-dot');

let mouseX = 0, mouseY = 0;
let dotX = 0, dotY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  dotX += (mouseX - dotX) * 0.9;
  dotY += (mouseY - dotY) * 0.9;
  dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
  requestAnimationFrame(animate);
}

animate();
