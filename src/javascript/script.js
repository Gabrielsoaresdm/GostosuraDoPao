// Função para envio do formulário
function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const pedido = document.getElementById("pedido").value;
  
    if (nome && email && pedido) {
      alert(`Obrigado, ${nome}! Seu pedido foi recebido.`);
      document.getElementById("nome").value = "";
      document.getElementById("email").value = "";
      document.getElementById("pedido").value = "";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
 // Animação da esquerda para a direita
 const elementos = document.querySelectorAll('.animar-esquerda');

 const observador = new IntersectionObserver((entradas) => {
   entradas.forEach(entrada => {
     if (entrada.isIntersecting) {
       entrada.target.classList.add('aparecer');
     }
   });
 }, {
   threshold: 0.1
 });

 //Hamburguer do navbar(encolhe dps do click)
 document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const toggle = document.getElementById('menu-toggle');
    if (toggle.checked) {
      toggle.checked = false; // Desmarca o checkbox
    }
  });
});
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 3
    }
  }
});


 elementos.forEach(el => observador.observe(el));