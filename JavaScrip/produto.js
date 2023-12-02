//-------------------------CAPTURA DE ELEMENTO DO DOM(VARIAVEIS)-------------//
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let btnAdicionarProduto01 = document.getElementById("btn-adicionar-produto-01");
let qtdProduto01 = document.getElementById("qtd-produto-01");
let btnProdutoMenos = document.getElementById("btn-produtoMenos");
let valorProduto01 = 2.1;

let subtotalInformacao = {
  quantidade: 0,
  valor: 0,
};

//-------DEFINIR A MANIPULAÇÃO DOS ELEMENTOS CAPTURADOS (FUNÇÕES)-------------//
function atualizarSubtotal() {
  quantidadeSubtotal.innerText = subtotalInformacao.quantidade + "";
  valorSubtotal.innerText = subtotalInformacao.valor.toFixed(2);
}

function adicionarUm() {
  qtdProduto01.value = Number(qtdProduto01.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto01;

  atualizarSubtotal();
}

function diminuirUm() {
  qtdProduto01.value = Number(qtdProduto01.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto01;
  atualizarSubtotal();
}

//----------------DEFINIR QUANDO DEVEM SER MANIPULADOS OS ELEMENTOS (EVENTOS)-------------//
btnAdicionarProduto01.addEventListener("click", adicionarUm);
btnProdutoMenos.addEventListener("click", diminuirUm);

//----------------Manipulado Pão Doce Tradicional-------------//
let qtdProduto02 = document.getElementById("qtd-produto-02");
let btnAdicionarProduto02 = document.getElementById("btn-adicionar-produto-02");
let btnProdutoMenos02 = document.getElementById("btn-produtoMenos-02");
let valorProduto02 = 1.1;

function adicionarDois() {
  qtdProduto02.value = Number(qtdProduto02.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto02;

  atualizarSubtotal();
}

function diminuirDois() {
  qtdProduto02.value = Number(qtdProduto02.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto02;
  atualizarSubtotal();
}
btnAdicionarProduto02.addEventListener("click", adicionarDois);
btnProdutoMenos02.addEventListener("click", diminuirDois);

//----------------Manipulado Pão Integral Tradicional-------------//
let qtdProduto03 = document.getElementById("qtd-produto-03");
let btnAdicionarProduto03 = document.getElementById("btn-adicionar-produto-03");
let btnProdutoMenos03 = document.getElementById("btn-produtoMenos-03");
let valorProduto03 = 2.99;

function adicionarTres() {
  qtdProduto03.value = Number(qtdProduto03.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto03;

  atualizarSubtotal();
}

function diminuirTres() {
  qtdProduto03.value = Number(qtdProduto03.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto03;
  atualizarSubtotal();
}
btnAdicionarProduto03.addEventListener("click", adicionarTres);
btnProdutoMenos03.addEventListener("click", diminuirTres);

//----------------Manipulado Pão Italiano-------------//
let qtdProduto04 = document.getElementById("qtd-produto-04");
let btnAdicionarProduto04 = document.getElementById("btn-adicionar-produto-04");
let btnProdutoMenos04 = document.getElementById("btn-produtoMenos-04");
let valorProduto04 = 7.5;

function adicionarQuatro() {
  qtdProduto04.value = Number(qtdProduto04.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto04;

  atualizarSubtotal();
}

function diminuirQuatro() {
  qtdProduto04.value = Number(qtdProduto04.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto04;
  atualizarSubtotal();
}
btnAdicionarProduto04.addEventListener("click", adicionarQuatro);
btnProdutoMenos04.addEventListener("click", diminuirQuatro);
