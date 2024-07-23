

const corpo = document.getElementsByTagName("body")[0];
// Obtém o botão
const backToTopBtn = document.querySelector("#backToTopBtn");

// Função para rolar a página até o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Adiciona o evento de clique ao botão
backToTopBtn.addEventListener('click', scrollToTop);

// Monitora o scroll da página
window.onscroll = function () {
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


//Cards  


function CriarCards(item, card) {
  const main_card = document.createElement("div")
  const content_card = document.createElement("div")
  const image_card = document.createElement("div")
  const title_card = document.createElement("h4")
  const description_card = document.createElement("p")
  const LIMIT = 45

  main_card.className = "main-card"
  content_card.className = "conteudo-card"
  image_card.className = "image-card"
  title_card.className = "title-card"
  description_card.className = "description-card"

  card.appendChild(main_card)
  main_card.appendChild(content_card)
  content_card.appendChild(image_card)
  content_card.appendChild(title_card)
  content_card.appendChild(description_card)

  image_card.style.backgroundImage = `url(${item.url})`;
  title_card.innerText = `${item.titulo}`;
  description_card.innerText = `${item.desc}`;
  
  description_cardP = document.querySelectorAll(".description-card")
  for(let p of description_cardP){
    const aboveLimit = p.innerText.length > LIMIT
    const dotsOrEmpty = aboveLimit ? '...' : ''
    p.innerText = p.innerText.substring(0, LIMIT) + dotsOrEmpty
    }


  main_card.addEventListener('click', function () {
    switch (item.tipo) {
      case "PAISAGEM":
        CriarModal(item.url, item.desc, item.titulo)
        break;
      case "ABSTRATA":
        CriarModal(item.url, item.desc, item.titulo)
        break;
      case "FRASE":
        CriarModal(item.url, item.desc, item.titulo)
        break;
    }
  })

};

const lista_cards_abstratas = [
  {
    url: "./img/Abstrato/Abstrato1.png",
    titulo: "CoronaVírus",
    desc: "No caos o Brasil enfrentava assim como no mundo a pandêmia.",
    tipo: "ABSTRATA",
  },
{
  url: "./img/Abstrato/Abstrato2.png",
    titulo: "As diversas máscaras da sociedade.",
      desc: "Na vida averá momentos que será necessário colocar-mos uma mascara para o bem daqueles ao redor.",
        tipo: "ABSTRATA",
  },
{
  url: "./img/Abstrato/Abstrato3.png",
    titulo: '"Bicho solto" Seu Pereira - Coletivo 401',
      desc: "Bicho solto inspirado na musicalidade de Seu Pereira Coletivo 401. A obra foi deixada em mãos e a recepção foi maravilhosa.",
        tipo: "ABSTRATA",
  },
{
  url: "./img/Abstrato/Abstrato4.png",
    titulo: "'Liberdade' Representação da luta afro-descendentes e afro-cultural.",
    desc: "Sobre a terra a pele, a alma e a história. Sob o céu a lembrança e a memória. Hora sim, hora não, hora tudo, hora nada. Sobre o véu criminalidade alimentada pela cor, própria pele. Vejo o hoje, vejo o ontem, o amor o ódio é a fé. Enquanto quebram- se as correntes e arrames, encedeiam os sonhos, sonham a liberdade de natureza natural de ser.",
        tipo: "ABSTRATA",
  },
{
  url: "./img/Abstrato/Abstrato5.png",
    titulo: "As asas nem sempre voam. ",
      desc: "Negar o acaso, os aromas , as amarras e opinioes é não enxergar o momento presente. Eis que tais idéias e planos são nada perante a falta de ação. Queira o sol, a lua,e o vento balançar as asas do desejo e impulsionar a máquina que pulsa. Mas veja a timidez das limitações, a poética complexa da vida e seus grilhões muitas vezes imaginários. Eis que querer não é só poder e asas nem sempre voam. O detalhe está no aqui, no agora..",
        tipo: "ABSTRATA",
  },
{
  url: "./img/Abstrato/Abstrato6.png",
    titulo: "Amor tóxico.",
      desc: "Duas pessoas com cabeças diferentes vão se machucar ao tentar se encaixar.",
        tipo: "ABSTRATA",
  },
{
  url: "./img/Abstrato/Abstrato7.png",
    titulo: "Enfermagem - Os salva-vidas.",
      desc: "Para aqueles enviados por Deus para nos salvarem.",
        tipo: "ABSTRATA",
  },  
];
const lista_cards_paisagem = [
  {
    url: "./img/Paisagem/Paisagem1.png",
    titulo: "Brisa da Lagoa.",
    desc:"❣️Na brisa da lagoa De frente para o serrote Caminhada em ocara Felicidade é forte ❣️",
    tipo:"PAISAGEM",
  },
  {
    url: "./img/Paisagem/Paisagem2.png",
    titulo: "Reflexo das águas ocarenses.",
    desc: "Ah Ocara, eu sou declaradamente apaixonado por você e a forma como eu a sinto é refletido em minhas obras. ❣️🎨",
    tipo: "PAISAGEM",
  },
  {
    url: "./img/Paisagem/Paisagem3.png",
    titulo: "Serrote espelhado.",
    desc: "Diferentes formas de se ver a arte em Ocara-CE.",
    tipo: "PAISAGEM",
  },
  {
    url: "./img/Paisagem/Paisagem4.png",
    titulo: "Sol de Ocara-CE",
    desc: "Uma vista valiosa e adimirável retratada na arte.",
    tipo: "PAISAGEM",
  },
]
const lista_cards_frases = [
  {
    url: "./img/Frases/Frases1.png",
    titulo: "Filipenses 1.6",
    desc: "Tendo por certo isto mesmo, que aquele que em vós começou a boa obra a aperfeiçoará até ao dia de Jesus Cristo;",
    tipo: "FRASE",
  },
  {
    url: "./img/Frases/Frases2.png",
    titulo: "Salmos 73:26",
    desc: "Ainda que a minha mente e o meu corpo enfraqueçam, Deus é a minha força, ele é tudo o que sempre preciso;",
    tipo: "FRASE",
  },
  {
    url: "./img/Frases/Frases3.png",
    titulo: "Mateus 11:28",
    desc: "Venham a mim, todos os que estão cansados e sobrecarregados, e eu darei descanso a vocês;",
    tipo: "FRASE",
  },
  {
    url: "./img/Frases/Frases4.png",
    titulo: "Salmos 55:22",
    desc: "Entregue suas preocupações ao senhor, e ele o sustentará; Jamais permitirá que o justo venha a cair.",
    tipo: "FRASE",
  },
  {
    url: "./img/Frases/Frases5.png",
    titulo: "Salmos 30:2",
    desc: "Senhor meu Deus, eu te chamei por ajuda e você me curou",
    tipo: "FRASE",
  },
]
const cards_div1 = document.querySelector(".cards_abstratas");
const cards_div2 = document.querySelector(".cards_paisagem");
const cards_div3 = document.querySelector(".cards_frases");

lista_cards_abstratas.map(function (item) {
  CriarCards(item, cards_div1);
})
lista_cards_frases.map(function (item) {
  CriarCards(item, cards_div3);
})
lista_cards_paisagem.map(function (item) {
  CriarCards(item, cards_div2);
})

//Modal
function CriarModal(link, desc, nome) {
  corpo.style.overflow = "hidden"
  backToTopBtn.style.display = "none";
  const modal = document.querySelector(".modal-cards");
  const image_modal = document.querySelector(".image-modal");
  const title_modal = document.querySelector(".title-modal");
  const description_modal = document.querySelector(".description-modal");

  modal.style.display = "block";
  image_modal.style.backgroundImage = `url(${link})`;
  image_modal.style.backgroundRepeat = "no-repeat"
  title_modal.innerText = `${nome}`;
  description_modal.innerText = `${desc}`;
  const close_modal = document.querySelector(".close-modal");
  close_modal.addEventListener("click", () => {
    modal.style.display = "none";
    corpo.style.overflow = "auto";
    corpo.style.overflowX = "hidden";
    backToTopBtn.style.display = "block";

  })
}