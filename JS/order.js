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
  ".payment-details .user-detailes div input:not(.card-number-input input)"
);

inputs.forEach((e) => {
  e.addEventListener("focus", (ele) => {
    ele.target.parentNode.children[0].style.top = "-16px";
    ele.target.parentNode.children[0].style.left = "0px";
    ele.target.parentNode.children[0].style.fontSize = "12px";
  });
  e.addEventListener("blur", (ele) => {
    if (e.value.length > 0) {
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
cards.forEach((e) => {
  e.addEventListener("click", (ele) => {
    cardNumberInputs.forEach((input, index) => {
      input.value = "";
    });
    cardsPage.style.left = "-380px";
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
});

//Inputs Handle
const cardNumberInputs = document.querySelectorAll(".card-number-input input");

cardNumberInputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === input.maxLength) {
      if (index === 3)
        paymentPage.children[0].children[1].children[index].innerHTML =
          input.value;
      else
        paymentPage.children[0].children[1].children[index].innerHTML = "****";
      const nextInput = cardNumberInputs[index + 1];

      if (nextInput) {
        nextInput.focus();
      }
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value.length === 0) {
      paymentPage.children[0].children[1].children[index].innerHTML = "";
      const prevInput = cardNumberInputs[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  });
});

const cardHolderName = document.querySelector(
  "input[name = 'card-holder-name']"
);

const cardExpireDate = document.querySelector("input[name = 'card-expire']");
let holderName;
let expireDate;
cards.forEach((e) => {
  e.addEventListener("click", () => {
    holderName = paymentPage.querySelector(".name");
    expireDate = paymentPage.querySelector(".date");
    cardHolderName.value = "";
    cardExpireDate.value = "";
  });
});

cardHolderName.addEventListener("input", (e) => {
  holderName.innerHTML = cardHolderName.value;
});
cardExpireDate.addEventListener("input", (e) => {
  expireDate.innerHTML = cardExpireDate.value;
});

//End Payment Methods Handle

//Start Order Form Handle

const orderFormInputs = document
  .querySelector(".user-info")
  .querySelectorAll("input");

document.querySelector(".user-info").addEventListener("submit", (ele) => {
  orderFormInputs.forEach((e) => {
    if (e.value === "") {
      e.style.borderColor = "red";
      ele.preventDefault();
    } else {
      e.style.borderColor = "#ccc";
    }
  });

  if (orders.innerHTML == 0) ele.preventDefault();
});
const creditFormInputs = document
  .querySelector(".user-detailes")
  .querySelectorAll("input");

document.querySelector(".user-detailes").addEventListener("submit", (ele) => {
  creditFormInputs.forEach((e) => {
    if (e.value === "") {
      e.style.borderColor = "red";
      ele.preventDefault();
    } else {
      e.style.borderColor = "#ccc";
    }
  });
});

//End Order Form Handle

//Order Products Handel

const itemsBox = document.querySelector(".items");

for (let i = 0; i < sessionStorage?.length; i++) {
  if (!isNaN(sessionStorage.key(i))) {
    const itemBox = document.createElement("div");
    itemBox.className = "item-box";
    itemBox.innerHTML = ` <form action="">
                  <img class="item-img" src="${
                    sessionStorage.getItem(sessionStorage.key(i)).split(",")[0]
                  }" alt="" />
                  <p class="item-name">${
                    sessionStorage.getItem(sessionStorage.key(i)).split(",")[1]
                  }</p>
                  <p class="item-category">${
                    sessionStorage.getItem(sessionStorage.key(i)).split(",")[3]
                  }</p>
                  <p class="item-price">${
                    sessionStorage.getItem(sessionStorage.key(i)).split(",")[2]
                  } <span>EGP</span></p>
                  <input
                    type="number"
                    name="item-quantity"
                    id="item-quantity"
                    min="1"
                    max="10"
                    value="1"
                  />
                  <input
                    type="checkbox"
                    name="check-order"
                    id="check-order"
                    checked
                  />
                </form>`;
    itemsBox.appendChild(itemBox);
  }
}

//Start Orders Number Handel
const checkBoxs = document.querySelectorAll(
  ".item-box form input[type='checkbox']"
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
          total +=
            +ele.target.parentNode.children[3].firstChild.textContent * +count;
        else
          total -=
            +ele.target.parentNode.children[3].firstChild.textContent * +count;
        if (total < 0) total = 0;
        totalPrice.innerHTML = `${total.toFixed()} EG`;
      });

      if (e.checked === true)
        total +=
          e.parentNode.children[3].firstChild.textContent *
          e.parentNode.children[4].value;
      totalPrice.innerHTML = `${total.toFixed()} EG`;
    });
    count = 0;
  });
});

checkBoxs.forEach((e) => {
  e.addEventListener("click", (ele) => {
    if (ele.target.checked === true)
      total +=
        +ele.target.parentNode.children[3].firstChild.textContent *
        +ele.target.parentNode.children[4].value;
    else
      total -=
        +ele.target.parentNode.children[3].firstChild.textContent *
        +ele.target.parentNode.children[4].value;
    if (total < 0) total = 0;
    totalPrice.innerHTML = `${total.toFixed()} EG`;
  });

  if (e.checked === true)
    total +=
      e.parentNode.children[3].firstChild.textContent *
      e.parentNode.children[4].value;
  totalPrice.innerHTML = `${total.toFixed()} EG`;
});

//End Total Price Handel

//Start Select Items

const selectCheckBox = document.getElementById("select-all");

checkBoxs.forEach((e) => {
  e.addEventListener("click", () => {
    if (orders.textContent == 0) selectCheckBox.checked = false;
    else if (orders.textContent == checkBoxs.length)
      selectCheckBox.checked = true;
  });

  selectCheckBox.addEventListener("click", () => {
    total = 0;

    //orders counter
    counter = 0;
    checkBoxs.forEach((e) => {
      if (e.checked === true) counter++;
    });
    orders.innerHTML = counter;

    if (selectCheckBox.checked) {
      checkBoxs.forEach((box) => {
        box.checked = true;
      });
    } else {
      checkBoxs.forEach((box) => {
        box.checked = false;
      });
    }

    checkBoxs.forEach((e) => {
      if (e.checked === true)
        total +=
          e.parentNode.children[3].firstChild.textContent *
          e.parentNode.children[4].value;

      totalPrice.innerHTML = `${total.toFixed()} EG`;
    });
  });
});
//End Select Items
