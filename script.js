// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Menu Mobile (Hamburguer)
    const mobileMenu = document.getElementById("mobile-menu");
    const navList = document.querySelector("nav ul");

    mobileMenu.addEventListener("click", function() {
        navList.classList.toggle("ativo");
        // Altera o ícone entre barras e 'X' ao clicar
        const icone = mobileMenu.querySelector("i");
        if (navList.classList.contains("ativo")) {
            icone.classList.remove("fa-bars");
            icone.classList.add("fa-xmark");
        } else {
            icone.classList.remove("fa-xmark");
            icone.classList.add("fa-bars");
        }
    });

    // 2. Botão Interativo de Impacto (Mostrar/Esconder texto)
    const btnMensagem = document.getElementById("btn-mensagem");
    const mensagemOculta = document.getElementById("mensagem-oculta");

    btnMensagem.addEventListener("click", function() {
        if (mensagemOculta.classList.contains("escondido")) {
            mensagemOculta.classList.remove("escondido");
            btnMensagem.textContent = "Ocultar Dados";
        } else {
            mensagemOculta.classList.add("escondido");
            btnMensagem.textContent = "Ver Impacto Positivo";
        }
    });
});