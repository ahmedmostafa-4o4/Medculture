import { SpeedInsights } from "@vercel/speed-insights/next";
let array = [];
let newArray = [];
let key;

for (let i = 0; i < window.localStorage.length; i++) {
  array.push(`${window.localStorage.getItem(window.localStorage.key(i))}`);
}
for (let i = 0; i < window.localStorage.length; i++) {
  if (window.localStorage.key(i).includes("no.")) {
    newArray[
      window.localStorage.key(i).slice(7)
    ] = `${window.localStorage.getItem(window.localStorage.key(i))}`;
  }
}

console.log(newArray);
let myDiv = document.getElementById("p-name");
let myTxt = document.createTextNode(
  ` ${localStorage.getItem("Current Account")}`
);
let ageInput = document.getElementById("age");
let addressInput = document.getElementById("address");
let jopInput = document.getElementById("jop");
let btn = document.getElementById("btn");
let myForm = document.getElementById("form");
localStorage.setItem("obj", ["Ahmed", 21]);
myForm.onsubmit = function () {
  localStorage.setItem(
    `${localStorage.getItem("Current Email")} Age`,
    ageInput.value
  );
  localStorage.setItem(
    `${localStorage.getItem("Current Email")} Address`,
    addressInput.value
  );
  localStorage.setItem(
    `${localStorage.getItem("Current Email")} Jop Description`,
    jopInput.value
  );
};
myDiv.appendChild(myTxt);
