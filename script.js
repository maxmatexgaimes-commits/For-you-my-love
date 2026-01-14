function abrirSite() {
  document.getElementById("cartinha").style.display = "none";
  document.getElementById("site").style.display = "block";
  document.getElementById("musica").play();
}

// CONTADOR (MUDE A DATA AQUI)
const inicio = new Date(2025, 10, 20, 17, 2); // 20/11 às 17:02

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas % 24;
  document.getElementById("minutos").innerText = minutos % 60;
  document.getElementById("segundos").innerText = segundos % 60;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// FOTO + CORAÇÃO
function clicarFoto(img) {
  img.style.transform = "scale(1.3) rotate(5deg)";
  criarCoracao();
  setTimeout(() => img.style.transform = "scale(1)", 600);
}

function criarCoracao() {
  const span = document.createElement("span");
  span.innerHTML = "💖";
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.querySelector(".efeitos").appendChild(span);
  setTimeout(() => span.remove(), 6000);
}

setInterval(criarCoracao, 800);

// SURPRESA FINAL
setTimeout(() => {
  document.getElementById("surpresa").style.display = "flex";
}, 4000);

function fecharSurpresa() {
  document.getElementById("surpresa").style.display = "none";
}