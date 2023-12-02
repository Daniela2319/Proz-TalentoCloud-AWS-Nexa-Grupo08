//------------------------FUNÇÃO DE VALIDAÇÃO -------------------//

function validarValor(input, helper) {
  input.addEventListener("change", (e) => {
    let valor = e.target.value;
    // console.log(valor);
    if (valor.length < 3) {
      input.classList.add("error");
      helper.classList.add("visible");
      helper.innerText = "Digite um nome válido maior que 3 caracteres.";
      inputCorretos.username = false;
    } else {
      input.classList.remove("error");
      helper.classList.remove("visible");
      input.classList.add("correct");
      inputCorretos.username = true;
    }
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}

// --------------------------------VALIDAÇÃO USERNAME ------------------------------------- //
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");

validarValor(usernameInput, usernameHelper);

//------------------------VALIDAÇÃO EMAIL -------------------//

const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    estilizarInputCorreto(emailInput, emailHelper);
    inputCorretos.email = true;
  } else {
    estilizarInputIncorreto(emailInput, emailHelper);
    emailHelper.innerText = "O email deve conter '@' e o '.com'";
    inputCorretos.email = false;
  }
});

//------------------------VALIDAÇÃO ASSUNTO -------------------//
let assunto = document.getElementById("assunto");
let assuntoHelper = document.getElementById("assunto-helper");

validarValor(assunto, assuntoHelper);

//------------------------VALIDAÇÃO COMÉNTARIO-------------------//
let comentarioTextarea = document.getElementById("msg");
let comentarioHelper = document.getElementById("msg-helper");

comentarioTextarea.addEventListener("input", (e) => {
  let valor = e.target.value;

  if (valor.length < 10) {
    comentarioTextarea.classList.add("error");
    comentarioHelper.classList.add("visible");
    comentarioHelper.innerText =
      "Digite um texto válido com pelo menos 10 caracteres.";
  } else {
    comentarioTextarea.classList.remove("error");
    comentarioHelper.classList.remove("visible");
    comentarioTextarea.classList.add("correct");
  }
});

//------------------------EVITAR ENVIO DO FORMULÁRIO botão Enviar-------------------//
let btnContato = document.getElementById("btn-contato");

let inputCorretos = {
  username: false,
  email: false,
  assunto: true,
};

btnContato.addEventListener("click", (e) => {
  if (
    inputCorretos.username == false ||
    inputCorretos.email == false ||
    inputCorretos.assunto == false
  ) {
    e.preventDefault();
    alert("Os campos obrigatórios precisam preenchidos corretamente!");
  } else {
    alert("Contato enviado com sucesso!");
  }
});
