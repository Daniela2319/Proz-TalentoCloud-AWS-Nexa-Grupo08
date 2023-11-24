//------------------------FUNÇÃO DE VALIDAÇÃO -------------------//

function validarValor(input, helper) {
  input.addEventListener("change", (e) => {
    let valor = e.target.value;
    // console.log(valor);
    if (valor.length < 3) {
      input.classList.add("error");
      helper.classList.add("visible");
      helper.innerText = "Digite um nome válido maior que 3 caracteres.";
    } else {
      input.classList.remove("error");
      helper.classList.remove("visible");
      input.classList.add("correct");
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
      helper.innerText = "O campo de senha não pode estar vazio";
      estilizarInputIncorreto(input, helper);
    } else {
      estilizarInputCorreto(input, helper);
    }
  });
}

// --------------------------------VALIDAÇÃO USERNAME ------------------------------------- //
let usernameInput = document.getElementById("username");
let usernameInputCadastro = document.getElementById("usernameCadastro");
let usernameHelper = document.getElementById("username-helper");
let usernameHelperCadastro = document.getElementById(
  "username-helper-cadastro"
);
let usernameLabel = document.querySelector('label[for="username"]');

togglePopup(usernameInput, usernameLabel);

validarValor(usernameInput, usernameHelper);
validarValor(usernameInputCadastro, usernameHelperCadastro);

//------------------------VALIDAÇÃO EMAIL -------------------//

const emailLabel = document.querySelector('label[for="email"]');
const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  console.log(valor);

  if (valor.includes("@") && valor.includes(".com")) {
    emailInput.classList.add("correct");
    emailInput.classList.remove("error");
    emailInput.classList.remove("visible");
  } else {
    emailInput.classList.add("error");
    emailInput.classList.remove("correct");
    emailHelper.classList.add("visible");
    emailHelper.innerText = "O email deve conter '@' e o '.com'";
  }
});

//------------------------VALIDAÇÃO SENHA -------------------//
let senhaInput = document.getElementById("passwordone");
let senhaCadastroInput = document.getElementById("password");
let senhaHelper = document.getElementById("senha-helper");
let senhaHelperCadastro = document.getElementById("username-helper-cadastro");

validarSenha(senhaInput, senhaHelper);
validarSenha(senhaCadastroInput, senhaHelperCadastro);
