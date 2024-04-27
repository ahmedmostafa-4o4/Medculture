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
  if (showedList.style.height === "165px") {
    showedList.style.height = "0px";
  } else {
    showedList.style.height = "165px";
  }
});

//FeedBack Section
scrollBtn.attr;
const stars = document.querySelectorAll(".feed-back-section form .stars i");
stars.forEach((e) => {
  e.addEventListener("mouseover", (ele) => {
    e.classList.remove("fa-solid");
    e.classList.add("fa-regular");
    for (let i = +ele.currentTarget.getAttribute("data-set"); i > 0; i--) {
      stars.forEach((e) => {
        if (e.getAttribute("data-set") === `${i}`) {
          e.classList.remove("fa-regular");
          e.classList.add("fa-solid");
        }
      });
      e.classList.remove("fa-solid");
      e.classList.add("fa-regular");
    }
  });
  e.addEventListener("click", (ele) => {
    for (let i = +ele.currentTarget.getAttribute("data-set"); i > 0; i--) {
      stars.forEach((e) => {
        if (e.getAttribute("data-set") === `${i}`) {
          console.log(i);
          e.classList.remove("fa-regular");
          e.classList.add("fa-solid");
        }
      });
    }
  });
});

//transisions

let sideBarLinks = document.querySelectorAll(".side-bar-links>li>a");
let navBarLinks = document.querySelectorAll(".links>li>a");
let aboutUsDiv = document.querySelector("div[data-set = 'about-us']");
let servicesDiv = document.querySelector("div[data-set = 'services']");
let testimonialsDiv = document.querySelector("div[data-set = 'testimonials']");
let feedBackDiv = document.querySelector("div[data-set = 'feed-back']");
let landingDiv = document.querySelector("div[data-set = 'landing']");

// sideBarLinks.forEach((e) => {
//   console.log(e);
// });

let allSections = [
  aboutUsDiv,
  servicesDiv,
  testimonialsDiv,
  feedBackDiv,
  landingDiv,
];

let allLinks = [...sideBarLinks, ...navBarLinks];

allLinks.forEach((e) => {
  e.addEventListener("click", (ele) => {
    allSections.forEach((e) => {
      e.style.display = "none";
      if (
        ele.currentTarget.getAttribute("data-set") ===
        e.getAttribute("data-set")
      ) {
        e.style.display = "flex";
      }
    });
  });
});
