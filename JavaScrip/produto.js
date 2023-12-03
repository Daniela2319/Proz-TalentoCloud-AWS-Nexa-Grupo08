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

//----------------Manipulado Baquette Tradicional-------------//
let qtdProduto05 = document.getElementById("qtd-produto-05");
let btnAdicionarProduto05 = document.getElementById("btn-adicionar-produto-05");
let btnProdutoMenos05 = document.getElementById("btn-produtoMenos-05");
let valorProduto05 = 5.5;

function adicionarCinco() {
  qtdProduto05.value = Number(qtdProduto05.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto05;

  atualizarSubtotal();
}

function diminuirCinco() {
  qtdProduto05.value = Number(qtdProduto05.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto05;
  atualizarSubtotal();
}
btnAdicionarProduto05.addEventListener("click", adicionarCinco);
btnProdutoMenos05.addEventListener("click", diminuirCinco);

//----------------Manipulado Pão Australiano-------------//
let qtdProduto06 = document.getElementById("qtd-produto-06");
let btnAdicionarProduto06 = document.getElementById("btn-adicionar-produto-06");
let btnProdutoMenos06 = document.getElementById("btn-produtoMenos-06");
let valorProduto06 = 3.3;

function adicionarSeis() {
  qtdProduto06.value = Number(qtdProduto06.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto06;

  atualizarSubtotal();
}

function diminuirSeis() {
  qtdProduto06.value = Number(qtdProduto06.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto06;
  atualizarSubtotal();
}
btnAdicionarProduto06.addEventListener("click", adicionarSeis);
btnProdutoMenos06.addEventListener("click", diminuirSeis);

//----------------Manipulado Croissant-------------//
let qtdProduto07 = document.getElementById("qtd-produto-07");
let btnAdicionarProduto07 = document.getElementById("btn-adicionar-produto-07");
let btnProdutoMenos07 = document.getElementById("btn-produtoMenos-07");
let valorProduto07 = 2.15;

function adicionarSete() {
  qtdProduto07.value = Number(qtdProduto07.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto07;

  atualizarSubtotal();
}

function diminuirSete() {
  qtdProduto07.value = Number(qtdProduto07.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto07;
  atualizarSubtotal();
}
btnAdicionarProduto07.addEventListener("click", adicionarSete);
btnProdutoMenos07.addEventListener("click", diminuirSete);

//----------------Manipulado Pão de Queijo-------------//
let qtdProduto08 = document.getElementById("qtd-produto-08");
let btnAdicionarProduto08 = document.getElementById("btn-adicionar-produto-08");
let btnProdutoMenos08 = document.getElementById("btn-produtoMenos-08");
let valorProduto08 = 2.0;

function adicionarOito() {
  qtdProduto08.value = Number(qtdProduto08.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto08;

  atualizarSubtotal();
}

function diminuirOito() {
  qtdProduto08.value = Number(qtdProduto08.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto08;
  atualizarSubtotal();
}
btnAdicionarProduto08.addEventListener("click", adicionarOito);
btnProdutoMenos08.addEventListener("click", diminuirOito);

//----------------Manipulado Brioche-------------//
let qtdProduto09 = document.getElementById("qtd-produto-09");
let btnAdicionarProduto09 = document.getElementById("btn-adicionar-produto-09");
let btnProdutoMenos09 = document.getElementById("btn-produtoMenos-09");
let valorProduto09 = 4.1;

function adicionarNove() {
  qtdProduto09.value = Number(qtdProduto09.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto09;

  atualizarSubtotal();
}

function diminuirNove() {
  qtdProduto09.value = Number(qtdProduto09.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto09;
  atualizarSubtotal();
}
btnAdicionarProduto09.addEventListener("click", adicionarNove);
btnProdutoMenos09.addEventListener("click", diminuirNove);

//----------------Manipulado Pão de Cacau-------------//
let qtdProduto10 = document.getElementById("qtd-produto-10");
let btnAdicionarProduto10 = document.getElementById("btn-adicionar-produto-10");
let btnProdutoMenos10 = document.getElementById("btn-produtoMenos-10");
let valorProduto10 = 9.1;

function adicionarDez() {
  qtdProduto10.value = Number(qtdProduto10.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto10;

  atualizarSubtotal();
}

function diminuirDez() {
  qtdProduto10.value = Number(qtdProduto10.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto10;
  atualizarSubtotal();
}
btnAdicionarProduto10.addEventListener("click", adicionarDez);
btnProdutoMenos10.addEventListener("click", diminuirDez);

//----------------Manipulado Pão de Caixa-------------//
let qtdProduto11 = document.getElementById("qtd-produto-11");
let btnAdicionarProduto11 = document.getElementById("btn-adicionar-produto-11");
let btnProdutoMenos11 = document.getElementById("btn-produtoMenos-11");
let valorProduto11 = 5.99;

function adicionarOnze() {
  qtdProduto11.value = Number(qtdProduto11.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto11;

  atualizarSubtotal();
}

function diminuirOnze() {
  qtdProduto11.value = Number(qtdProduto11.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto11;
  atualizarSubtotal();
}
btnAdicionarProduto11.addEventListener("click", adicionarOnze);
btnProdutoMenos11.addEventListener("click", diminuirOnze);

//----------------Manipulado Pão de Caixa Integral-------------//
let qtdProduto12 = document.getElementById("qtd-produto-12");
let btnAdicionarProduto12 = document.getElementById("btn-adicionar-produto-12");
let btnProdutoMenos12 = document.getElementById("btn-produtoMenos-12");
let valorProduto12 = 6.99;

function adicionarDoze() {
  qtdProduto12.value = Number(qtdProduto12.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto12;

  atualizarSubtotal();
}

function diminuirDoze() {
  qtdProduto12.value = Number(qtdProduto12.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto12;
  atualizarSubtotal();
}
btnAdicionarProduto12.addEventListener("click", adicionarDoze);
btnProdutoMenos12.addEventListener("click", diminuirDoze);

//----------------Manipulado Congelados Pão de Queijo-------------//

let qtdProduto13 = document.getElementById("qtd-produto-13");
let btnAdicionarProduto13 = document.getElementById("btn-adicionar-produto-13");
let btnProdutoMenos13 = document.getElementById("btn-produtoMenos-13");
let valorProduto13 = 8.99;

function adicionarTreze() {
  qtdProduto13.value = Number(qtdProduto13.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto13;

  atualizarSubtotal();
}

function diminuirTreze() {
  qtdProduto13.value = Number(qtdProduto13.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto13;
  atualizarSubtotal();
}
btnAdicionarProduto13.addEventListener("click", adicionarTreze);
btnProdutoMenos13.addEventListener("click", diminuirTreze);

//----------------Manipulado Congelados Croissant-------------//

let qtdProduto14 = document.getElementById("qtd-produto-14");
let btnAdicionarProduto14 = document.getElementById("btn-adicionar-produto-14");
let btnProdutoMenos14 = document.getElementById("btn-produtoMenos-14");
let valorProduto14 = 8.99;

function adicionarQuartoze() {
  qtdProduto14.value = Number(qtdProduto14.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto14;

  atualizarSubtotal();
}

function diminuirQuartoze() {
  qtdProduto14.value = Number(qtdProduto14.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto14;
  atualizarSubtotal();
}
btnAdicionarProduto14.addEventListener("click", adicionarQuartoze);
btnProdutoMenos14.addEventListener("click", diminuirQuartoze);

//----------------Manipulado Congelados Pão Frances-------------//

let qtdProduto15 = document.getElementById("qtd-produto-15");
let btnAdicionarProduto15 = document.getElementById("btn-adicionar-produto-15");
let btnProdutoMenos15 = document.getElementById("btn-produtoMenos-15");
let valorProduto15 = 8.99;

function adicionarQuize() {
  qtdProduto15.value = Number(qtdProduto15.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto15;

  atualizarSubtotal();
}

function diminuirQuize() {
  qtdProduto15.value = Number(qtdProduto15.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto15;
  atualizarSubtotal();
}
btnAdicionarProduto15.addEventListener("click", adicionarQuize);
btnProdutoMenos15.addEventListener("click", diminuirQuize);

//----------------Manipulado Congelados Pão Integral-------------//

let qtdProduto16 = document.getElementById("qtd-produto-16");
let btnAdicionarProduto16 = document.getElementById("btn-adicionar-produto-16");
let btnProdutoMenos16 = document.getElementById("btn-produtoMenos-16");
let valorProduto16 = 8.99;

function adicionarDezeseis() {
  qtdProduto16.value = Number(qtdProduto16.value) + 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade + 1;
  subtotalInformacao.valor = subtotalInformacao.valor + valorProduto16;

  atualizarSubtotal();
}

function diminuirDezeseis() {
  qtdProduto16.value = Number(qtdProduto16.value) - 1;
  subtotalInformacao.quantidade = subtotalInformacao.quantidade - 1;
  subtotalInformacao.valor = subtotalInformacao.valor - valorProduto16;
  atualizarSubtotal();
}
btnAdicionarProduto16.addEventListener("click", adicionarDezeseis);
btnProdutoMenos16.addEventListener("click", diminuirDezeseis);
