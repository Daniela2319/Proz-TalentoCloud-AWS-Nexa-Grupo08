let cart = [];
let modalQt = 0;
let key = 0;
const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);

modelsJson.map((item, index) => {
  let modelsItem = c(".models .models-item").cloneNode(true);
  modelsItem.setAttribute("data-key", index);
  modelsItem.querySelector(".models-item--img img").src = item.img;
  modelsItem.querySelector(
    ".models-item--price"
  ).innerHTML = `R$ ${item.price[1]}`;
  modelsItem.querySelector(".models-item--name").innerHTML = item.name;
  modelsItem.querySelector(".models-item--desc").innerHTML = item.description;

  modelsItem.querySelector("a").addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      key = e.target.closest(".models-item").getAttribute("data-key");
      modalQt = 1;
      c(".modelsBig img").src = modelsJson[key].img;
      c(".modelsInfo h1").innerHTML = modelsJson[key].name;
      c(".modelsInfo--desc").innerHTML = modelsJson[key].description;
      c(".modelsInfo--size.selected").classList.remove("selected");
      cs(".modelsInfo--size").forEach((size, sizeIndex) => {
        if (sizeIndex === 2) {
          size.classList.add("selected");
          c(".modelsInfo--actualPrice").innerHTML = `R$ ${modelsJson[key].price[
            sizeIndex
          ].toFixed(2)}`;
        }
        // size.innerHTML = modelsJson[key].sizes[sizeIndex];
        size.querySelector("span").innerHTML = modelsJson[key].sizes[sizeIndex];
      });
      c(".modelsInfo--qt").innerHTML = modalQt;
      c(".modelsWindowArea").style.opacity = 0;
      c(".modelsWindowArea").style.display = "flex";
      setTimeout(() => {
        c(".modelsWindowArea").style.opacity = 1;
      });
    },
    200
  );
  c(".models-area").append(modelsItem);
});

//Ações do Produto - de fecha a janela
function closeModal() {
  c(".modelsWindowArea").style.opacity = 0;
  setTimeout(() => {
    c(".modelsWindowArea").style.display = "none";
  }, 500);
}
cs(".modelsInfo--cancelButton, .modelsInfo--cancelMobileButton").forEach(
  (item) => {
    item.addEventListener("click", closeModal);
  }
);

//Açõe do Produto - do botão de adicionar e diminuir
c(".modelsInfo--qtmenos").addEventListener("click", () => {
  if (modalQt > 1) {
    modalQt--;
    c(".modelsInfo--qt").innerHTML = modalQt;
  }
});

c(".modelsInfo--qtmais").addEventListener("click", () => {
  modalQt++;
  c(".modelsInfo--qt").innerHTML = modalQt;
});

//Acões do Produto - quantidades
cs(".modelsInfo--size").forEach((size, sizeIndex) => {
  size.addEventListener("click", (e) => {
    c(".modelsInfo--size.selected").classList.remove("selected");
    size.classList.add("selected");
    c(".modelsInfo--actualPrice").innerHTML = `R$ ${modelsJson[key].price[
      sizeIndex
    ].toFixed(2)}`;
  });
});

//Ações do Produto - adicionar na cesta
c(".modelsInfo--addButton").addEventListener("click", () => {
  let size = parseInt(c(".modelsInfo--size.selected").getAttribute("data-key"));
  let identifier = modelsJson[key].id + "@" + size;
  let locaId = cart.findIndex((item) => item.identifier == identifier);
  if (locaId > -1) {
    cart[locaId].quantidade += modalQt;
  } else {
    cart.push({
      identifier,
      id: modelsJson[key].id,
      size,
      quantidade: modalQt,
    });
  }
  updateCart();
  closeModal();
});
//Ações do Produto - click no mobile
c(".menu-openner").addEventListener("click", () => {
  if (cart.length > 0) {
    c("aside").style.left = "0";
  }
});

c(".menu-closer").addEventListener("click", () => {
  c("aside").style.left = "100vw";
});

c(".cart--finalizar").addEventListener("click", () => {
  alert("Sua Compra foi finalizada com Sucesso!");
  cart = [];
  updateCart();
});

function updateCart() {
  c(".menu-openner span").innerHTML = cart.length;
  if (cart.length > 0) {
    c("aside").classList.add("show");
    c(".cart").innerHTML = "";
    let subtotal = 0;
    let desconto = 0;
    let total = 0;
    cart.map((itemCart, index) => {
      let modelsItem = modelsJson.find((itemBD) => itemBD.id == itemCart.id);
      subtotal += modelsItem.price[itemCart.size] * itemCart.quantidade;
      let cartItem = c(".models .cart--item").cloneNode(true);
      let modelsSizeName;
      switch (itemCart.size) {
        case 0:
          modelsSizeName = "P";
          break;
        case 1:
          modelsSizeName = "M";
          break;
        case 2:
          modelsSizeName = "G";
          break;
      }

      cartItem.querySelector("img").src = modelsItem.img;
      cartItem.querySelector(".cart--item-nome").innerHTML = `${
        modelsItem.name
      } - (${modelsItem.sizes[itemCart.size]})`;
      cartItem.querySelector(".cart--item--qt").innerHTML = itemCart.quantidade;
      cartItem
        .querySelector(".cart--item-qtmenos")
        .addEventListener("click", () => {
          if (itemCart.quantidade > 1) {
            itemCart.quantidade--;
          } else {
            cart.splice(index, 1);
          }
          updateCart();
        });
      cartItem
        .querySelector(".cart--item-qtmais")
        .addEventListener("click", () => {
          itemCart.quantidade++;
          updateCart();
        });

      c(".cart").append(cartItem);
    });
    desconto = subtotal * 0.1;
    total = subtotal - desconto;
    c(".subtotal span:last-child").innerHTML = `R$ ${subtotal.toFixed(2)}`;
    c(".desconto span:last-child").innerHTML = `R$ ${desconto.toFixed(2)}`;
    c(".total span:last-child").innerHTML = `R$ ${total.toFixed(2)}`;
  } else {
    c("aside").classList.remove("show");
    c("aside").style.left = "100vw";
  }
}
