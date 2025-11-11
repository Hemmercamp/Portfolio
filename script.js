// ✨ Efeito de digitação no subtítulo
const text = "💻 Desenvolvedor Front-End | Criando soluções com código";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 75);
  }
}

window.onload = type;

// 💫 Animação suave nos cards quando aparecem na tela
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => observer.observe(card));
