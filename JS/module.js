let mainPage = document.querySelector(".main");
let accountPage = document.querySelector(".account-page");

function openAccountPage() {
  mainPage.style.display = "none";
  accountPage.style.display = "flex";
  console.log("Opened");
}

function back() {
  mainPage.style.display = "flex";
  accountPage.style.display = "none";
}
