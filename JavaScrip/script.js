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
      let key = e.target.closest(".models-item").getAttribute("data-key");
      c(".modelsBig img").src = modelsJson[key].img;
      c(".modelsInfo h1").innerHTML = modelsJson[key].name;
      c(".modelsInfo--desc").innerHTML = modelsJson[key].description;
      c(".modelsWindowArea").style.opcity = 0;
      c(".modelsWindowArea").style.display = "flex";
      setTimeout(() => {
        c(".modelsWindowArea").style.opcity = 1;
      });
    },
    200
  );

  c(".models-area").append(modelsItem);
});
