// Seleção de elementos no DOM
const opcaoIngresso = document.querySelector("#opcao-ingresso");
const inputQuantidade = document.querySelector("#input-qtd");
const botaoComprar = document.querySelector("#botao-comprar");
const listaQuantidades = document.querySelector("#lista-quantidades");

const salvo = localStorage.getItem("estoque_ads");
const listaIngressos = salvo ? JSON.parse(salvo) : [
  { id: 1, tipo: "Cadeira inferior", value: "inferior", estoque: 400 },
  { id: 2, tipo: "Cadeira superior", value: "superior", estoque: 60 },
  { id: 3, tipo: "Pista", value: "pista", estoque: 1000 },
  { id: 4, tipo: "VIP", value: "vip", estoque: 10 },
];

renderizarListaIngressos();
renderizarEstoque();


function renderizarListaIngressos() {
  opcaoIngresso.innerHTML = "";
  listaIngressos.forEach((ingresso) => exibirNaLista(ingresso));
}

function exibirNaLista(ingresso) {
    const novoItem = document.createElement("option");
    novoItem.value = ingresso.value;
    novoItem.textContent = ingresso.tipo;
    opcaoIngresso.appendChild(novoItem);
}

// Estoque
function estoqueEsgotado(ingresso) {
  return ingresso.estoque === 0;
}

function desabilitarOpcaoIngresso(ingresso) {
  const option = opcaoIngresso.querySelector(`[value="${ingresso.value}"]`);
  option.disabled = true;
}

function estoqueInsuficiente(ingresso, quantidade) {
  return quantidade > ingresso.estoque;
}

function atualizarEstoque(ingresso, quantidade) {
  ingresso.estoque -= quantidade;
  localStorage.setItem("estoque_ads", JSON.stringify(listaIngressos));
}

function exibirNoEstoque(ingresso) {
  const novoItem = document.createElement("li");
  if (estoqueEsgotado(ingresso)) {
    desabilitarOpcaoIngresso(ingresso);
    novoItem.innerHTML = `${ingresso.tipo}<span id="qtd-${ingresso.value}">Esgotado</span>`;
    listaQuantidades.appendChild(novoItem);
  } else {
    novoItem.innerHTML = `${ingresso.tipo}<span id="qtd-${ingresso.value}">${ingresso.estoque}</span>`;
    listaQuantidades.appendChild(novoItem);
  }
}

function renderizarEstoque() {
  listaQuantidades.innerHTML = "";
  listaIngressos.forEach((ingresso) => exibirNoEstoque(ingresso));
}

// lógica da compra
function obterTipoIngresso(opcaoIngresso) {
  const ingressoSelecionado = listaIngressos.find(
    (i) => i.value === opcaoIngresso.value,
  );
  return ingressoSelecionado;
}

function obterQuantidade(inputQuantidade) {
  let valorQuantidade = parseInt(inputQuantidade.value);
  if (isNaN(valorQuantidade)) {
    alert("Valor Inválido \nDigite uma número válido");
    inputQuantidade.value = "";
    return;
  }
  if (valorQuantidade > 10) {
    alert(
      "(Atenção: Limite de 10 ingressos por compra) \nDigite uma quantidade válida");
    inputQuantidade.value = "";
    return;
  }
  if (valorQuantidade <= 0) {
    alert("Valor Inválido \nDigite uma quantidade maior que zero");
    inputQuantidade.value = "";
    return;
  }
  return valorQuantidade;
}

function efetuarCompra(ingresso, quantidade) {
  atualizarEstoque(ingresso, quantidade);
  inputQuantidade.value = "";
}

// controle
function handleCompra() {
  const ingresso = obterTipoIngresso(opcaoIngresso);
  const quantidade = obterQuantidade(inputQuantidade);

  if (!quantidade) return;
  if (estoqueEsgotado(ingresso)) {
    alert("Ingresso Esgotado");
    return;
  }
  if (estoqueInsuficiente(ingresso, quantidade)) {
    alert("Estoque insuficiente para quantidade selecionada");
    return;
  }

  efetuarCompra(ingresso, quantidade);
  renderizarEstoque();
}

// Eventos
botaoComprar.addEventListener("click", handleCompra);
inputQuantidade.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleCompra();
  }
});