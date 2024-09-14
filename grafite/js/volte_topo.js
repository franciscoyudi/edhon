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

const carr1 = document.querySelector("#carrosel1");
const carr2 = document.querySelector("#carrosel2");

const lista_grafites = [
  "./img/grafites/gr0.jpeg",
  "./img/grafites/gr1.jpeg",
  "./img/grafites/gr2.jpeg",
  "./img/grafites/gr3.jpeg",
  "./img/grafites/gr4.jpeg",
  "./img/grafites/gr5.jpeg",
  "./img/grafites/gr6.jpeg",
  "./img/grafites/gr7.jpeg",
  "./img/grafites/gr8.jpeg",
  "./img/grafites/gr9.jpeg",
  "./img/grafites/gr10.jpeg",
  "./img/grafites/gr11.jpeg",
  "./img/grafites/gr12.jpeg",
  "./img/grafites/gr13.jpeg",
]

//Embaralha imagens
function shuffle(lista_grafites) {
  let currentIndex = lista_grafites.length;

  while (currentIndex !== 0) {

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [lista_grafites[currentIndex], lista_grafites[randomIndex]] = [lista_grafites[randomIndex], lista_grafites[currentIndex]];
  }
}
shuffle(lista_grafites);
//Fim Embaralha imagens^^

lista_grafites.map(function criar_img(item){
  let criar_img = document.createElement("img");
  carr1.appendChild(criar_img);
  criar_img.src = item;
})

//Embaralha imagens
shuffle(lista_grafites);
//Fim Embaralha imagens^^

lista_grafites.map(function criar_img(item){
  let criar_img = document.createElement("img");
  carr2.appendChild(criar_img);
  criar_img.src = item;
})