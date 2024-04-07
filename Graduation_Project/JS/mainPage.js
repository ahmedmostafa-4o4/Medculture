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

const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navBar.classList.remove("nav-bar");
    navBar.classList.add("nav-bar-onscroll");
    sideBar.style.top = "0";
  } else {
    navBar.classList.remove("nav-bar-onscroll");
    navBar.classList.add("nav-bar");
    sideBar.style.top = "-15px";
  }
});

const sideBarOpenBtn = document.getElementById("side-bar-open-btn");
const sideBarCloseBtn = document.getElementById("side-bar-close-btn");

const sideBar = document.querySelector(".side-bar");

sideBarOpenBtn.addEventListener("click", function () {
  sideBar.classList.add("side-bar-show");
  document.body.classList.add("not-touchable");
  // const x = document.querySelectorAll("*:not(.side-bar)");
  // x.forEach(function (e) {
  //   e.addEventListener("focus", function () {
  //     sideBar.classList.remove("side-bar-show");
  //     document.body.classList.remove("not-touchable");
  //   });
  // });
});
sideBarCloseBtn.addEventListener("click", function () {
  sideBar.classList.remove("side-bar-show");
  document.body.classList.remove("not-touchable");
});

const showLinks = document.querySelector(
  ".side-bar .side-bar-links .side-bar-dropped-menu"
);
const showedList = document.querySelector(
  ".side-bar .side-bar-links .side-bar-dropped-menu .side-bar-drop-down-menu"
);

showLinks.addEventListener("click", function () {
  if (showedList.style.height === "120px") {
    showedList.style.height = "0px";
  } else {
    showedList.style.height = "120px";
  }
});
