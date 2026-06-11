/* =====================================
   ECOAGRO 360 - APP.JS
   Página Inicial
===================================== */

// Lista de curiosidades

const curiosidades = [

    "🌱 A rotação de culturas ajuda a recuperar nutrientes do solo e reduz o surgimento de pragas.",

    "💧 Sistemas inteligentes de irrigação podem economizar até 50% de água em algumas culturas.",

    "🐝 A presença de polinizadores aumenta a produtividade de diversas plantações.",

    "🌳 Áreas de preservação ajudam a manter o equilíbrio climático da propriedade rural.",

    "☀️ A energia solar reduz custos e diminui a emissão de gases do efeito estufa.",

    "🚜 A agricultura de precisão utiliza tecnologia para produzir mais gastando menos recursos.",

    "♻️ Práticas sustentáveis beneficiam tanto o meio ambiente quanto a economia do produtor.",

    "🌎 O equilíbrio entre produção e preservação garante alimentos para as próximas gerações."

];

let indiceCuriosidade = 0;

/* =====================================
   Trocar Curiosidade
===================================== */

function trocarCuriosidade() {

    indiceCuriosidade++;

    if (indiceCuriosidade >= curiosidades.length) {

        indiceCuriosidade = 0;

    }

    document.getElementById("curiosidade").innerHTML =
        curiosidades[indiceCuriosidade];

}

/* =====================================
   Troca automática a cada 8 segundos
===================================== */

setInterval(() => {

    trocarCuriosidade();

}, 8000);

/* =====================================
   Folhas caindo na tela
===================================== */

function criarFolha() {

    const folha = document.createElement("div");

    folha.className = "folha";

    folha.innerHTML = "🍃";

    folha.style.left = Math.random() * window.innerWidth + "px";

    folha.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    folha.style.fontSize =
        (Math.random() * 15 + 15) + "px";

    document.body.appendChild(folha);

    setTimeout(() => {

        folha.remove();

    }, 10000);

}

/* cria uma folha a cada 700ms */

setInterval(criarFolha, 700);

/* =====================================
   Animação dos cards ao rolar
===================================== */

const elementos = document.querySelectorAll(".card, .objetivosGrid div");

function verificarAnimacao() {

    elementos.forEach(item => {

        const topo = item.getBoundingClientRect().top;

        if (topo < window.innerHeight - 80) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0px)";

        }

    });

}

window.addEventListener("scroll", verificarAnimacao);

window.addEventListener("load", verificarAnimacao);

/* =====================================
   Saudação conforme horário
===================================== */

const hora = new Date().getHours();

let mensagem = "";

if (hora < 12) {

    mensagem = "Bom dia! 🌞";

}

else if (hora < 18) {

    mensagem = "Boa tarde! 🌿";

}

else {

    mensagem = "Boa noite! 🌙";

}

console.log(mensagem + " Bem-vindo ao EcoAgro 360!");

/* =====================================
   Contador de visitas (LocalStorage)
===================================== */

let visitas = localStorage.getItem("ecoagro_visitas");

if (!visitas) {

    visitas = 0;

}

visitas++;

localStorage.setItem("ecoagro_visitas", visitas);

console.log("Número de visitas:", visitas);

/* =====================================
   Mensagem motivacional aleatória
===================================== */

const mensagens = [

    "Cada decisão sustentável faz diferença!",

    "O futuro da agricultura começa hoje.",

    "Produzir e preservar podem caminhar juntos.",

    "Tecnologia e natureza podem ser grandes aliadas.",

    "Pequenas atitudes geram grandes resultados."

];

const mensagemAleatoria = mensagens[
    Math.floor(Math.random() * mensagens.length)
];

console.log(mensagemAleatoria);

/* =====================================
   Efeito de clique nos botões
===================================== */

const botoes = document.querySelectorAll("button, .botaoPrincipal");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        botao.style.transform = "scale(0.95)";

        setTimeout(() => {

            botao.style.transform = "";

        }, 150);

    });

});

/* =====================================
   Fade da página
===================================== */

window.onload = () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1s";

        document.body.style.opacity = "1";

    }, 100);

};
