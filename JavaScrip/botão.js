//------------------------FUNÇÃO DE VALIDAÇÃO -------------------//

function validarValor(input, helper) {
  input.addEventListener("change", (e) => {
    let valor = e.target.value;
    // console.log(valor);
    if (valor.length < 3) {
      input.classList.add("error");
      helper.classList.add("visible");
      helper.innerText = "Digite um nome válido maior que 3 caracteres.";
      inputsCorretos.username = false;
    } else {
      input.classList.remove("error");
      helper.classList.remove("visible");
      input.classList.add("correct");
      inputsCorretos.username = true;
    }
  });
}

function togglePopup(input, label) {
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });

  input.addEventListener("blur", () => {
    label.classList.add("required-popup");
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

function validarSenha(input, helper) {
  input.addEventListener("blur", (e) => {
    let valor = e.target.value;
    if (valor === "") {
      helper.innerText = "O campo de senha não pode estar vazio!";
      estilizarInputIncorreto(input, helper);
      inputsCorretos.senha = false;
      inputCorretoLog.senha = false;
    } else {
      estilizarInputCorreto(input, helper);
      inputsCorretos.senha = true;
      inputCorretoLog.senha = true;
    }
  });
}

// --------------------------------VALIDAÇÃO USERNAME ------------------------------------- //

let usernameInputCadastro = document.getElementById("usernameCadastro");
let usernameHelperCadastro = document.getElementById(
  "username-helper-cadastro"
);

validarValor(usernameInputCadastro, usernameHelperCadastro);

//------------------------VALIDAÇÃO EMAIL -------------------//
let emailInputInicial = document.getElementById("email-inicial");
let emailHelperInicial = document.getElementById("email-helper-inicial");

emailInputInicial.addEventListener("change", (e) => {
  let valor = e.target.value;
  // console.log(valor);

  if (valor.includes("@") && valor.includes(".com")) {
    estilizarInputCorreto(emailInputInicial, emailHelperInicial);
    inputCorretoLog.email = true;
  } else {
    emailHelperInicial.innerText = "O email deve conter '@' e o '.com'";
    estilizarInputIncorreto(emailInputInicial, emailHelperInicial);
    inputCorretoLog.email = false;
  }
});

const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  // console.log(valor);

  if (valor.includes("@") && valor.includes(".com")) {
    estilizarInputCorreto(emailInput, emailHelper);
    inputsCorretos.email = true;
  } else {
    emailHelper.innerText = "O email deve conter '@' e o '.com'";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputsCorretos.email = false;
  }
});

//------------------------VALIDAÇÃO SENHA -------------------//
let senhaInput = document.getElementById("passwordone");
let senhaCadastroInput = document.getElementById("password");
let senhaHelper = document.getElementById("senha-helper");
let senhaHelperCadastro = document.getElementById("senha-helper-cadastro");

validarSenha(senhaInput, senhaHelper);
validarSenha(senhaCadastroInput, senhaHelperCadastro);

//------------------------VALIDAÇÃO CONFIRMA SENHA -------------------//
let confirmaSenhaInput = document.getElementById("passwordtwo");
let confirmaSenhaHelper = document.getElementById("senha-helper-confirma");

confirmaSenhaInput.addEventListener("blur", (e) => {
  let valorConfirmaSenha = e.target.value;

  if (valorConfirmaSenha === senhaCadastroInput.value) {
    estilizarInputCorreto(confirmaSenhaInput, confirmaSenhaHelper);
    inputsCorretos.confirmaSenha = true;
  } else {
    confirmaSenhaHelper.innerText = "As senhas precisam ser iguais!";
    estilizarInputIncorreto(confirmaSenhaInput, confirmaSenhaHelper);
    inputsCorretos.confirmaSenha = false;
  }
});

//------------------------EVITAR ENVIO DO FORMULÁRIO botão Enviar-------------------//
let btnEnviar = document.getElementById("btn-enviar");
let inputsCorretos = {
  username: false,
  email: false,
  senha: false,
  confirmaSenha: false,
};

btnEnviar.addEventListener("click", (e) => {
  if (
    inputsCorretos.username == false ||
    inputsCorretos.email == false ||
    inputsCorretos.senha == false ||
    inputsCorretos.confirmaSenha == false
  ) {
    e.preventDefault();
    alert("Os campos obrigatórios precisam preenchidos corretamente!");
  } else {
    alert("Cadastro enviado com sucesso!");
  }
});

//------------------------EVITAR ENVIO DO FORMULÁRIO botão acessar-------------------//
let btnAcessar = document.getElementById("btn-acessar");
let inputCorretoLog = {
  email: false,
  senha: false,
};

btnAcessar.addEventListener("click", (e) => {
  if (inputCorretoLog.email == false || inputCorretoLog.senha == false) {
    e.preventDefault();
    alert("Os campos obrigatórios precisam preenchidos corretamente!");
  } else {
    alert("Login sendo acessando com sucesso!");
  }
});
