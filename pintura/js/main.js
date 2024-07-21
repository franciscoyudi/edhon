

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
if(scrollTop > scrollInit){
  header.style.display = "none";
}else{
  header.style.display="flex";
}});


//Cards  


function CriarCards(item,card){
  const main_card = document.createElement("div")
  const content_card = document.createElement("div")
  const image_card = document.createElement("div")
  const title_card = document.createElement("h4")
  const description_card = document.createElement("p")
  
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

  main_card.addEventListener('click',function(){
    switch(item.tipo){
      case "PAISAGEM":
        CriarModal(item.url,item.desc,item.titulo)
        break;
      case "ABSTRATA":
        CriarModal(item.url,item.desc,item.titulo)
        break;
      case "FRASE":
        CriarModal(item.url,item.desc,item.titulo)
        break;
    }
  })
};

const lista_cards_abstratas = [
  {
    url: "../img/Abstrato/Abstrato1.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },
  {
    url: "../img/Abstrato/Abstrato2.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },
  {
    url: "../img/Abstrato/Abstrato3.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },
  {
    url: "../img/Abstrato/Abstrato4.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },
  {
    url: "../img/Abstrato/Abstrato5.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },
  {
    url: "../img/Abstrato/Abstrato6.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },
  {
    url: "../img/Abstrato/Abstrato7.png",
    titulo: "Uma linda pintura abstrata",
    desc:"Uma breve descrição sem detalhes",
    tipo: "ABSTRATA",
  },  
];
const lista_cards_paisagem = [
  {
    url: "../img/Paisagem/Paisagem1.png",
    titulo: "Uma linda pintura de Paisagem",
    desc:"Uma breve descrição sem detalhes",
    tipo: "PAISAGEM",
  },
  {
    url: "../img/Paisagem/Paisagem2.png",
    titulo: "Uma linda pintura de Paisagem",
    desc:"Uma breve descrição sem detalhes",
    tipo: "PAISAGEM",
  },
  {
    url: "../img/Paisagem/Paisagem3.png",
    titulo: "Uma linda pintura de Paisagem",
    desc:"Uma breve descrição sem detalhes",
    tipo: "PAISAGEM",
  },
  {
    url: "../img/Paisagem/Paisagem4.png",
    titulo: "Uma linda pintura de Paisagem",
    desc:"Uma breve descrição sem detalhes",
    tipo: "PAISAGEM",
  },
]
const lista_cards_frases = [
  {
    url: "../img/Frases/Frases1.png",
    titulo: "Uma linda pintura de Frases",
    desc:"Uma breve descrição sem detalhes",
    tipo:"FRASE",
  },
  {
    url: "../img/Frases/Frases2.png",
    titulo: "Uma linda pintura de Frases",
    desc:"Uma breve descrição sem detalhes",
    tipo:"FRASE",
  },
  {
    url: "../img/Frases/Frases3.png",
    titulo: "Uma linda pintura de Frases",
    desc:"Uma breve descrição sem detalhes",
    tipo:"FRASE",
  },
  {
    url: "../img/Frases/Frases4.png",
    titulo: "Uma linda pintura de Frases",
    desc:"Uma breve descrição sem detalhes",
    tipo:"FRASE",
  },
  {
    url: "../img/Frases/Frases5.png",
    titulo: "Uma linda pintura de Frases",
    desc:"Uma breve descrição sem detalhes",
    tipo:"FRASE",
  },
]
const cards_div1 = document.querySelector(".cards_abstratas");
const cards_div2 = document.querySelector(".cards_paisagem");
const cards_div3 = document.querySelector(".cards_frases");

lista_cards_abstratas.map(function(item){
  CriarCards(item,cards_div1);
})
lista_cards_frases.map(function(item){
  CriarCards(item,cards_div2);
})
lista_cards_paisagem.map(function(item){
  CriarCards(item,cards_div3);
})  

//Modal
function CriarModal(link,desc,nome){
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
  close_modal.addEventListener("click", ()=>{
    modal.style.display = "none";
    corpo.style.overflow = "auto";
    corpo.style.overflowX = "hidden";
    backToTopBtn.style.display = "block";
   
  }) 
}