// Função para envio do formulário
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-contato");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const cnpj = document.getElementById("cnpj").value.trim();
    const modelo = document.getElementById("modelo").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    const interesses = Array.from(document.querySelectorAll('input[name="interesse"]:checked'))
      .map(el => el.value);

    if (!nome || !email || !telefone || !cidade || !modelo || !mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    alert(
      `Obrigado, ${nome}! Seus dados foram recebidos:\n\n` +
      `Email: ${email}\nTelefone: ${telefone}\nCidade: ${cidade}\nCNPJ: ${cnpj || "Não informado"}\n` +
      `Modelo: ${modelo}\nInteresses: ${interesses.join(", ") || "Nenhum"}\nMensagem: ${mensagem}`
    );

    formulario.reset();
  });
});

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
const desktopSwiper = new Swiper(".desktopSwiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".desktopSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".desktopSwiper .swiper-button-next",
    prevEl: ".desktopSwiper .swiper-button-prev",
  },
});

// Swiper mobile
const mobileSwiper = new Swiper(".mobileSwiper", {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".mobileSwiper .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mobileSwiper .swiper-button-next",
    prevEl: ".mobileSwiper .swiper-button-prev",
  },
});


 elementos.forEach(el => observador.observe(el));