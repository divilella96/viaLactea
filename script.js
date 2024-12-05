const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Configurações do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
const numStars = 1500; // Número de estrelas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// Inicializa estrelas
for (let i = 0; i < numStars; i++) {
  const distance = Math.random() * canvas.width / 3;
  const angle = Math.random() * Math.PI * 2;
  const size = Math.random() * 2;
  const speed = Math.random() * 0.002;

  stars.push({
    x: centerX + distance * Math.cos(angle),
    y: centerY + distance * Math.sin(angle),
    angle: angle,
    distance: distance,
    size: size,
    speed: speed,
    color: `hsl(${Math.random() * 360}, 80%, 70%)`
  });
}

// Função para desenhar estrelas
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; // Efeito de trilha
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.fill();

    // Atualiza posição
    star.angle += star.speed;
    star.x = centerX + star.distance * Math.cos(star.angle);
    star.y = centerY + star.distance * Math.sin(star.angle);

    // Pequena oscilação de tamanho
    star.size = Math.abs(Math.sin(star.angle * 10)) + 0.5;
  });

  requestAnimationFrame(draw);
}

// Ajusta canvas ao redimensionar
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Inicia a animação
draw();
