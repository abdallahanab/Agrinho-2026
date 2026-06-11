/* =====================================
   ECOAGRO 360 - RELATÓRIO
===================================== */

// Recupera os dados da simulação

const dados = JSON.parse(
    localStorage.getItem("ecoagro_relatorio")
);

// Caso não exista nenhuma simulação

if (!dados) {

    alert("Nenhuma simulação encontrada.");

    window.location.href = "simulador.html";

}

// Preenche os indicadores

document.getElementById("soloFinal").textContent =
    dados.solo + "%";

document.getElementById("aguaFinal").textContent =
    dados.agua + "%";

document.getElementById("economiaFinal").textContent =
    dados.economia + "%";

document.getElementById("bioFinal").textContent =
    dados.bio + "%";

document.getElementById("carbonoFinal").textContent =
    dados.carbono + "%";

document.getElementById("pontuacaoFinal").textContent =
    dados.pontos;

// =====================================
// Classificação
// =====================================

let classificacao = "";

if (dados.pontos >= 350) {

    classificacao = "💎 Mestre do Agro Sustentável";

}

else if (dados.pontos >= 280) {

    classificacao = "🥇 Guardião da Natureza";

}

else if (dados.pontos >= 200) {

    classificacao = "🥈 Agricultor Consciente";

}

else {

    classificacao = "🥉 Produtor em Desenvolvimento";

}

document.getElementById("classificacao").textContent =
    classificacao;

// =====================================
// Análise Inteligente
// =====================================

let analise = "";

if (
    dados.solo >= 80 &&
    dados.agua >= 80 &&
    dados.bio >= 80 &&
    dados.carbono <= 40
) {

    analise =
        "Sua fazenda alcançou um excelente equilíbrio entre produtividade e preservação ambiental. As escolhas sustentáveis demonstraram que é possível produzir mais sem comprometer os recursos naturais.";

}

else if (dados.economia > dados.bio) {

    analise =
        "O desempenho econômico foi positivo, porém houve perda ambiental significativa. Investir em práticas sustentáveis pode gerar resultados ainda melhores no longo prazo.";

}

else {

    analise =
        "Sua gestão apresentou avanços importantes, mas ainda existem oportunidades para melhorar o equilíbrio entre produção agrícola e conservação ambiental.";

}

document.getElementById("textoAnalise").textContent =
    analise;

// =====================================
// Medalhas
// =====================================

const medalhas = [];

if (dados.solo >= 85) {

    medalhas.push("🌱 Guardião do Solo");

}

if (dados.agua >= 85) {

    medalhas.push("💧 Mestre da Água");

}

if (dados.bio >= 85) {

    medalhas.push("🌳 Protetor da Biodiversidade");

}

if (dados.carbono <= 25) {

    medalhas.push("☀️ Energia Limpa");

}

if (dados.economia >= 90) {

    medalhas.push("💰 Economia Inteligente");

}

if (medalhas.length === 0) {

    medalhas.push("🌾 Agricultor Persistente");

}

const listaMedalhas =
    document.getElementById("listaMedalhas");

medalhas.forEach(item => {

    const div = document.createElement("div");

    div.textContent = item;

    listaMedalhas.appendChild(div);

});

// =====================================
// Recomendações
// =====================================

const listaConselhos =
    document.getElementById("listaConselhos");

function adicionarConselho(texto){

    const li = document.createElement("li");

    li.textContent = texto;

    listaConselhos.appendChild(li);

}

if(dados.solo < 70){

    adicionarConselho(
        "Invista em rotação de culturas para recuperar o solo."
    );

}

if(dados.agua < 70){

    adicionarConselho(
        "Adote sistemas de irrigação inteligente para economizar água."
    );

}

if(dados.bio < 70){

    adicionarConselho(
        "Preserve áreas naturais para aumentar a biodiversidade."
    );

}

if(dados.carbono > 50){

    adicionarConselho(
        "Reduza o uso de combustíveis fósseis e priorize energia renovável."
    );

}

if(dados.economia < 70){

    adicionarConselho(
        "Utilize tecnologias agrícolas para aumentar a eficiência produtiva."
    );

}

if(listaConselhos.children.length === 0){

    adicionarConselho(
        "Parabéns! Continue mantendo o equilíbrio entre produção e sustentabilidade."
    );

}

// =====================================
// Salvar recorde
// =====================================

const recorde =
    localStorage.getItem("ecoagro_recorde");

if(!recorde || dados.pontos > Number(recorde)){

    localStorage.setItem(
        "ecoagro_recorde",
        dados.pontos
    );

}

// =====================================
// Mostrar recorde
// =====================================

const titulo = document.createElement("h3");

titulo.style.marginTop = "40px";

titulo.style.textAlign = "center";

titulo.textContent =
    "🏆 Melhor Pontuação: " +
    localStorage.getItem("ecoagro_recorde");

document.querySelector(".relatorio")
.appendChild(titulo);

// =====================================
// Mensagem final
// =====================================

console.log(
    "Relatório carregado com sucesso."
);
