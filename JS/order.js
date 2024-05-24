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
