// Obtém o botão
const backToTopBtn = document.getElementById("backToTopBtn");

// Função para rolar a página até o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adiciona o evento de clique ao botão
backToTopBtn.addEventListener('click', scrollToTop);

// Monitora o scroll da página
window.onscroll = function() {
  const section3 = document.getElementById("section3");
  const rect = section3.getBoundingClientRect();
  if (rect.top <= 0) { // Se a segunda seção está no topo ou acima do topo da janela
    backToTopBtn.style.display = "block"; // Mostra o botão
  } else {
    backToTopBtn.style.display = "none"; // Esconde o botão
  }
};


//Cabeçario

const header = document.querySelector(".navbar");
const scrollInit = 200;
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY
  if (scrollTop > scrollInit) {
    header.style.display = "none";
  } else {
    header.style.display = "flex";
  }
});

