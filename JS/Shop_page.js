const sideBarOpenBtn = document.getElementById("side-bar-open-btn");
const sideBarCloseBtn = document.getElementById("side-bar-close-btn");

const sideBar = document.querySelector(".side-bar");

sideBarOpenBtn.addEventListener("click", function () {
  productWindowbg.classList.add("show");
  sideBar.classList.add("side-bar-show");
  document.body.classList.add("not-touchable");
});
sideBarCloseBtn.addEventListener("click", function () {
  productWindowbg.classList.remove("show");
  sideBar.classList.remove("side-bar-show");
  document.body.classList.remove("not-touchable");
});

const showLinks = document.querySelector(".side-bar-dropped-menu");
const showedList = document.querySelector(".side-bar-drop-down-menu");

showLinks.addEventListener("click", function () {
  if (showedList.style.height === "120px") {
    showedList.style.height = "0px";
  } else {
    showedList.style.height = "120px";
  }
});

const scrollBtn = document.querySelector(".arrow-up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

scrollBtn.addEventListener("click", function () {
  scrollTo({
    top: "0",
    behavior: "smooth",
  });
});

let productBox = document.querySelectorAll("div[data-set='1']:not(.btns)");
let productWindowbg = document.querySelector(
  ".clicked-product-bg:not(.clicked-product-box)"
);
let productWindowDetials = document.querySelector(".clicked-product-box");
let productWindowCloseBtn = document.querySelector(".clicked-product-box>i");
let productWindowImg = document.querySelector(
  ".clicked-product-box-img-holder img"
);

let productWindowHeader = document.querySelector(
  ".clicked-product-box-img-holder h2"
);
let productWindowParagraph = document.querySelector(
  ".clicked-product-box-img-holder p"
);

let productPrice = document.querySelector(
  ".clicked-product-box .product-price"
);

let upperPart = document.querySelector(".clicked-product-box-img-holder");
let downPart = document.querySelector(".clicked-product-box-detailes");

let imgSrc;
let textHeaderNode;
let textParagraphNode;
let priceNode;
productBox.forEach((e) => {
  e.addEventListener("click", function (e) {
    productWindowImg.src = this.children[0].children[0].src;
    textParagraphNode = this.children[1].children[1].firstChild.cloneNode(true);
    textHeaderNode = this.children[1].children[0].firstChild.cloneNode(true);
    priceNode = this.children[1].children[2].cloneNode(true);
    productWindowParagraph.append(textParagraphNode);
    productWindowHeader.append(textHeaderNode);
    productPrice.append(priceNode);
    productWindowbg.classList.add("show");
    productWindowDetials.classList.add("clicked-product-box-animation");
  });
});

productWindowCloseBtn.addEventListener("click", function () {
  productWindowParagraph.firstChild.remove();
  productWindowHeader.firstChild.remove();
  productPrice.firstChild.remove();
  productWindowbg.classList.remove("show");
  productWindowDetials.classList.remove("clicked-product-box-animation");
});

productWindowbg.addEventListener("click", function () {
  productWindowParagraph.firstChild.remove();
  productWindowHeader.firstChild.remove();
  productWindowbg.classList.remove("show");
  productWindowDetials.classList.remove("clicked-product-box-animation");
});
