//Start Orders Number Handel
const checkBoxs = document.querySelectorAll(
  ".main .items-holder .items .item-box form input[type='checkbox']"
);
const orders = document.getElementById("orders-num");
let counter = 0;
orders.innerHTML = counter;
checkBoxs.forEach((e) => {
  e.addEventListener("click", (ele) => {
    counter = 0;
    checkBoxs.forEach((e) => {
      if (e.checked === true) counter++;
    });
    orders.innerHTML = counter;
  });
});

checkBoxs.forEach((e) => {
  if (e.checked === true) counter++;
});
orders.innerHTML = counter;
//End Orders Number Handel

//Start Total Price Handel
const itemPrice = document.querySelectorAll("item-price");
const totalPrice = document.getElementById("total-price");
const itemQuantity = document.querySelectorAll(
  "input[name = 'item-quantity'] "
);

let total = 0;
let count = 0;
itemQuantity.forEach((e) => {
  e.addEventListener("input", (ele) => {
    total = 0;
    count = ele.target.value;
    checkBoxs.forEach((e) => {
      e.addEventListener("click", (ele) => {
        if (ele.target.checked === true)
          total += +ele.target.parentNode.children[3].innerHTML * +count;
        else total -= +ele.target.parentNode.children[3].innerHTML * +count;
        if (total < 0) total = 0;
        totalPrice.innerHTML = `${total} EG`;
      });

      if (e.checked === true)
        total +=
          e.parentNode.children[3].innerHTML * e.parentNode.children[4].value;
      totalPrice.innerHTML = `${total} EG`;
    });
    count = 0;
  });
});

checkBoxs.forEach((e) => {
  e.addEventListener("click", (ele) => {
    if (ele.target.checked === true)
      total +=
        +ele.target.parentNode.children[3].innerHTML *
        +ele.target.parentNode.children[4].value;
    else
      total -=
        +ele.target.parentNode.children[3].innerHTML *
        +ele.target.parentNode.children[4].value;
    if (total < 0) total = 0;
    totalPrice.innerHTML = `${total} EG`;
  });

  if (e.checked === true)
    total +=
      e.parentNode.children[3].innerHTML * e.parentNode.children[4].value;
  totalPrice.innerHTML = `${total} EG`;
});

//End Total Price Handel

// Start Side Bar Handle

const openner = document.querySelector(".openner");
const sideBar = document.querySelector(".order-side-bar");

openner.addEventListener("click", () => {
  if (sideBar.style.right === "-300px") sideBar.style.right = "0px";
  else sideBar.style.right = "-300px";
});

//End Side Bar Handle
//Start Payment Methods Handle

const radioInput = document.querySelectorAll(".payment-method input");
const orderBtn = document.getElementById("order");
const paymentForm = document.querySelector(".user-info");

radioInput.forEach((e) => {
  e.addEventListener("click", (ele) => {
    radioInput.forEach((element) => {
      element.checked = false;
    });
    ele.target.checked = true;
  });
});

const blackBg = document.querySelector(".blured-bg");
const creditPage = document.querySelector(".credit-card-page");

blackBg.addEventListener("click", (ele) => {
  ele.target.style.display = "none";
  creditPage.style.display = "none";
});

paymentForm.addEventListener("submit", (e) => {
  radioInput.forEach((ele) => {
    if (ele.checked === true && ele.getAttribute("name") === "credit-card") {
      blackBg.style.display = "block";
      creditPage.style.display = "flex";
      e.preventDefault();
    } else {
      return 1;
    }
  });
});

const inputPlaceHolder = document.querySelectorAll(
  ".payment-details .user-detailes div p"
);
const inputs = document.querySelectorAll(
  ".payment-details .user-detailes div input"
);

inputs.forEach((e) => {
  e.addEventListener("focus", (ele) => {
    ele.target.parentNode.children[0].style.top = "-16px";
    ele.target.parentNode.children[0].style.left = "0px";
    ele.target.parentNode.children[0].style.fontSize = "12px";
  });
  e.addEventListener("blur", (ele) => {
    if (e.value > 0) {
      ele.target.parentNode.children[0].style.top = "-16px";
      ele.target.parentNode.children[0].style.left = "0px";
      ele.target.parentNode.children[0].style.fontSize = "12px";
    } else {
      ele.target.parentNode.children[0].style.top = "0px";
      ele.target.parentNode.children[0].style.left = "5px";
      ele.target.parentNode.children[0].style.fontSize = "15px";
    }
  });
});

const toggleBtnToRight = document.querySelector(".arrow.right");
const toggleBtnToLeft = document.querySelector(".arrow.left");
const cardsPage = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
const paymentPage = document.querySelector(".payment-details .appended");
let selectedCard;
cards.forEach((e) => {
  e.addEventListener("click", (ele) => {
    selectedCard = document.querySelector(
      ".payment-details .card .card-number"
    );

    cardsPage.style.left = "-380px";
    cardsPage.style.opacity = "0";
    console.log(paymentPage.firstChild);
    if (paymentPage.firstChild == null)
      paymentPage.append(ele.currentTarget.cloneNode(true));
    else {
      paymentPage.firstChild.remove();
      paymentPage.append(ele.currentTarget.cloneNode(true));
    }
  });
});

toggleBtnToLeft.addEventListener("click", () => {
  cardsPage.style.left = "0";
  cardsPage.style.opacity = "1";
});

//Inputs Handle

const cardNumber = document.querySelector("input[name = 'card-number']");
let container;
let c = 0;
let i = 0;
cardNumber.addEventListener("input", () => {
  if (cardNumber.value.length > c) {
    if (
      cardNumber.value.length === 4 ||
      cardNumber.value.length === 9 ||
      cardNumber.value.length === 14
    )
      cardNumber.value += " ";
  }
  if (
    cardNumber.value.length === 4 ||
    cardNumber.value.length === 9 ||
    cardNumber.value.length === 14
  )
    selectedCard.children.innerHTML = cardNumber.value;

  c++;
  console.log(cardNumber.value.length);
});

cardNumber.addEventListener("blur", () => {});

//End Payment Methods Handle
