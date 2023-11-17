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

// --------------------------------VALIDAÇÃO USERNAME ------------------------------------- //
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-helper");

validarValor(usernameInput, usernameHelper);

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

//------------------------VALIDAÇÃO ASSUNTO -------------------//
let assunto = document.getElementById("assunto");
let assuntoHelper = document.getElementById("assunto-helper");

validarValor(assunto, assuntoHelper);

//------------------------VALIDAÇÃO comentário -------------------//
let comentario = document.getElementById("msg");
let comentarioHelper = document.getElementById("msg-helper");

validarValor(comentario, comentarioHelper);
