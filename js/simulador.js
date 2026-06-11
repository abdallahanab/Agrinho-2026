/* =====================================
   ECOAGRO 360 - SIMULADOR
===================================== */

// Estado inicial da fazenda

let estado = {
    ano: 1,
    solo: 70,
    agua: 70,
    economia: 70,
    bio: 70,
    carbono: 40,
    pontos: 0
};

// Eventos climáticos

const eventos = [
    {
        nome: "☀️ Seca prolongada",
        agua: -15,
        economia: -5
    },
    {
        nome: "🌧️ Chuvas abundantes",
        agua: 10,
        solo: 5
    },
    {
        nome: "🐝 Aumento da polinização",
        bio: 10,
        economia: 5
    },
    {
        nome: "🐛 Praga agrícola",
        economia: -10,
        solo: -5
    },
    {
        nome: "🌱 Recuperação natural do solo",
        solo: 10
    },
    {
        nome: "🌪️ Tempestade intensa",
        economia: -10,
        agua: 5
    }
];

// Atualizar interface

function atualizarTela() {

    document.getElementById("ano").textContent = estado.ano;

    atualizarBarra("solo", estado.solo);
    atualizarBarra("agua", estado.agua);
    atualizarBarra("economia", estado.economia);
    atualizarBarra("bio", estado.bio);
    atualizarBarra("carbono", estado.carbono);

    estado.pontos =
        estado.solo +
        estado.agua +
        estado.economia +
        estado.bio -
        estado.carbono;

    document.getElementById("pontos").textContent =
        estado.pontos;

}

// Atualiza progress

function atualizarBarra(nome, valor){

    valor = limitar(valor);

    document.getElementById(nome).value = valor;

    document.getElementById(nome + "Texto").textContent =
        valor + "%";

    estado[nome] = valor;

}

// Limite entre 0 e 100

function limitar(valor){

    if(valor < 0){

        return 0;

    }

    if(valor > 100){

        return 100;

    }

    return valor;

}

// Escolhas do jogador

function escolha(tipo){

    switch(tipo){

        case "solar":

            estado.economia += 5;
            estado.carbono -= 10;
            break;

        case "diesel":

            estado.economia += 3;
            estado.carbono += 12;
            break;

        case "organico":

            estado.solo += 8;
            estado.bio += 5;
            estado.economia -= 2;
            break;

        case "quimico":

            estado.economia += 8;
            estado.solo -= 7;
            estado.bio -= 5;
            break;

        case "gotejamento":

            estado.agua += 10;
            estado.economia += 2;
            break;

        case "desperdicio":

            estado.agua -= 10;
            break;

        case "rotacao":

            estado.solo += 8;
            estado.bio += 6;
            break;

        case "mono":

            estado.economia += 5;
            estado.solo -= 8;
            break;

        case "preservar":

            estado.bio += 10;
            estado.carbono -= 5;
            break;

        case "desmatar":

            estado.economia += 10;
            estado.bio -= 15;
            estado.carbono += 10;
            break;

    }

    atualizarTela();

    document.getElementById("mensagem").innerHTML =
        "Última ação realizada com sucesso.";

}

// Próximo ano

function proximoAno(){

    estado.ano++;

    gerarEvento();

    atualizarTela();

    if(estado.ano > 10){

        finalizarSimulacao();

    }

}

// Evento aleatório

function gerarEvento(){

    const evento =
        eventos[Math.floor(Math.random()*eventos.length)];

    document.getElementById("eventoAtual").textContent =
        evento.nome;

    if(evento.solo){

        estado.solo += evento.solo;

    }

    if(evento.agua){

        estado.agua += evento.agua;

    }

    if(evento.economia){

        estado.economia += evento.economia;

    }

    if(evento.bio){

        estado.bio += evento.bio;

    }

}

// Reiniciar

function reiniciarJogo(){

    if(confirm("Deseja reiniciar a simulação?")){

        estado = {

            ano:1,
            solo:70,
            agua:70,
            economia:70,
            bio:70,
            carbono:40,
            pontos:0

        };

        atualizarTela();

        document.getElementById("eventoAtual").textContent =
            "Nenhum evento ocorreu ainda.";

        document.getElementById("mensagem").textContent =
            "Faça uma ação para iniciar a simulação.";

    }

}

// Finalizar

function finalizarSimulacao(){

    localStorage.setItem(
        "ecoagro_relatorio",
        JSON.stringify(estado)
    );

    window.location.href = "relatorio.html";

}

// Inicialização

atualizarTela();
