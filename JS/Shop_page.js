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
    document.body.style.overflow = "hidden";
  });
});

productWindowCloseBtn.addEventListener("click", function () {
  productWindowParagraph.firstChild.remove();
  productWindowHeader.firstChild.remove();
  productPrice.firstChild.remove();
  productWindowbg.classList.remove("show");
  productWindowDetials.classList.remove("clicked-product-box-animation");
  document.body.style.overflow = "auto";
});

productWindowbg.addEventListener("click", function () {
  productWindowParagraph.firstChild.remove();
  productWindowHeader.firstChild.remove();
  productWindowbg.classList.remove("show");
  productWindowDetials.classList.remove("clicked-product-box-animation");
  document.body.style.overflow = "auto";
});

const scrollBarLeftArrow = document.querySelector(".left-arrow");
const scrollBarRightArrow = document.querySelector(".right-arrow");
const scrollBar = document.querySelector(".departs");

scrollBarLeftArrow.addEventListener("click", function () {
  scrollBar.scrollLeft -= 70;
});

scrollBarRightArrow.addEventListener("click", function () {
  scrollBar.scrollLeft += 70;
});

let productBoxDiv = document.createElement("div");
productBoxDiv.classList.add("products-box");
let dataSetDiv = document.createElement("div");
dataSetDiv.setAttribute("data-set", "1");
let productImgDiv = document.createElement("div");
productImgDiv.classList.add("product-img");
let productImgElement = document.createElement("img");
productImgElement.setAttribute("src", `${localStorage}`);
let productDetailsDiv = document.createElement("div");
productDetailsDiv.classList.add("product-details");
let productNameElement = document.createElement("p");
productNameElement.classList.add("product-name");
let innerProductNameElement = document.createTextNode(`${localStorage}`);
let productDescriptionElement = document.createElement("p");
productDescriptionElement.classList.add("product-description");
let innerProductDescriptionElement = document.createTextNode(`${localStorage}`);
let productPriceElement = document.createElement("span");
productPriceElement.classList.add("product-price");
let innerproductPriceElement = document.createTextNode(`${localStorage}`);
let btnsDiv = document.createElement("div");
btnsDiv.classList.add("btns");
let atwlBtn = document.createElement("button");
atwlBtn.classList.add("atwl");
let buyNowBtn = document.createElement("button");
atwlBtn.classList.add("buy-now");
// let productImg = document.querySelectorAll(".product-img");
// let img;
// let header;
// let description;
// let detailes = document.createTextNode(` <div class="product-details"></div>`);
// let price = document.createTextNode(`<span class="product-price">30.99 <span>EGP</span></span>`);
// for(let i = 0 ; i < localStorage.length ; i++) {
//   if(i === 0) {
//     img = document.createTextNode(`<div class="product-img">
//     <img src= "../Images/${localStorage.getItem(localStorage.key(i))}" alt="" />
//   </div>`)
//   }
//   else if (i === 1) {
//     header = document.createTextNode(`<p class="product-name">${localStorage.getItem(localStorage.key(i))}</p>`)
//   }
//   else if(i === 2) {
//     description = document.createTextNode(`<p class="product-description"> ${localStorage.getItem(localStorage.key(i))}</p>`)
//   }
// }
// e.children[0].src = `${localStorage.getItem("Product Image")}`;

let mainPage = document.querySelector(".main");
let accountPage = document.querySelector(".account-page");

function openAccountPage() {
  mainPage.style.display = "none";
  accountPage.style.display = "flex";
}

function back() {
  mainPage.style.display = "flex";
  accountPage.style.display = "none";
}

// Account Info Page

const userInfoForm = document.querySelectorAll(".user-info-fields div");
const saveBtn = document.querySelector(".save-info-btn");

userInfoForm.forEach(function (e) {
  e.children[2].onclick = function () {
    e.children[1].disabled = false;
    e.children[1].focus();
    saveBtn.classList.remove("save-info-btn-false");
    saveBtn.classList.add("save-info-btn-true");
    saveBtn.disabled = false;
    if (e.children[1].disabled === false) {
      e.children[1].addEventListener(
        "blur",
        () => (e.children[1].disabled = true)
      );
    }
  };
});

let sideBarSet;
let rightPageSet;

const sideBarbtns = document.querySelectorAll(".account-side-bar div");
const rightPages = document.querySelectorAll(".right-page>div");
const dropDownMenuBtns = document.querySelectorAll(
  ".user-info>div:not(:first-child)"
);
sideBarbtns.forEach(function (e) {
  e.addEventListener("click", function (e) {
    sideBarbtns.forEach(function (ele) {
      ele.classList.remove("active");
      e.currentTarget.classList.add("active");
      sideBarSet = e.currentTarget.getAttribute("data-set");
    });
    rightPages.forEach(function (e) {
      if (e.getAttribute("data-set") === sideBarSet) {
        e.classList.remove("page-hidden");
      } else {
        e.classList.add("page-hidden");
      }
    });
  });
});

dropDownMenuBtns.forEach(function (e) {
  e.addEventListener("click", function (e) {
    sideBarbtns.forEach(function () {
      sideBarSet = e.currentTarget.getAttribute("data-set");
    });
    rightPages.forEach(function (e) {
      if (e.getAttribute("data-set") === sideBarSet) {
        openAccountPage();
        e.classList.remove("page-hidden");
      } else {
        openAccountPage();
        e.classList.add("page-hidden");
      }
    });
  });
});

//Alarm Page

//Set New Alarm

const setAlarmBtn = document.querySelector(".set-alarm");
const alarmBox = document.querySelector(".alarm-box-bg");
const saveAlarmBtn = document.querySelector(".save-alarm-btn");
const cancelAlarmBtn = document.querySelector(".cancel-alarm-btn");
const alarms = document.querySelector(".alarms");
setAlarmBtn.addEventListener("click", () => {
  alarmBox.style.display = "block";
});

cancelAlarmBtn.addEventListener("click", () => {
  alarmBox.style.display = "none";
});

let onOffBtn = document.querySelectorAll(".on-off");

saveAlarmBtn.addEventListener("click", () => {
  onOffBtns(onOffBtn);

  const alarmHolder = document.createElement("div");
  alarmHolder.classList.add("alarm-holder");
  const alarmNameP = document.createElement("p");
  alarmNameP.classList.add("alarm-name");
  const alarmName = document.createTextNode("Alarm Name");
  alarmNameP.append(alarmName);
  alarmHolder.append(alarmNameP);
  const timeP = document.createElement("p");
  let timeInput = document.getElementById("set-time");
  let fT = "";
  for (let i = 0; i < 2; i++) {
    fT += timeInput.value.charAt(i);
  }
  if (parseInt(fT) > 12) {
    var time = document.createTextNode(`${timeInput.value} PM`);
  } else {
    var time = document.createTextNode(`${timeInput.value} AM`);
  }
  console.log(time);
  timeP.append(time);
  alarmHolder.append(timeP);
  const timeOutP = document.createElement("p");
  timeOutP.classList.add("time-out");
  const timeOut = document.createTextNode("Ring in 15h 6m");
  timeOutP.append(timeOut);
  alarmHolder.append(timeOutP);
  const onOff = document.createElement("div");
  onOff.classList.add("on-off");
  const on = document.createElement("div");
  on.classList.add("on");
  on.classList.add("on-state");
  onOff.append(on);
  alarmHolder.append(onOff);
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  const editBtnText = document.createTextNode("Edit");
  editBtn.append(editBtnText);
  alarmHolder.append(editBtn);
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove");
  const removeBtnText = document.createTextNode("remove");
  removeBtn.append(removeBtnText);
  alarmHolder.append(removeBtn);
  alarms.append(alarmHolder);
  onOffBtn = document.querySelectorAll(".on-off");
  let onBtn = document.querySelectorAll(".on");
  const removeAlarmBtn = document.querySelectorAll(".remove");
  removeAlarmBtn.forEach((e) => {
    e.addEventListener("click", (ele) => {
      ele.currentTarget.parentNode.remove();
    });
  });
  timeInput = document.getElementById("set-time");

  console.log(timeInput.value);
  onOffBtns(onOffBtn);
  preventDefault();
});

function onOffBtns(onOffBtn) {
  onOffBtn.forEach((e) => {
    e.addEventListener("click", (element) => {
      if (element.currentTarget.children[0].classList.contains("on-state")) {
        element.currentTarget.children[0].classList.remove("on-state");
        element.currentTarget.children[0].classList.add("off-state");
        e.style.backgroundColor = "black";
      } else {
        element.currentTarget.children[0].classList.remove("off-state");
        element.currentTarget.children[0].classList.add("on-state");
        e.style.backgroundColor = "red";
      }
    });
  });
}
