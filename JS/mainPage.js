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
  overlaySidebar.classList.add("display");
});

sideBarCloseBtn.addEventListener("click", function () {
  sideBar.classList.remove("side-bar-show");
  document.body.classList.remove("not-touchable");
  overlaySidebar.classList.remove("display");
});

const showLinks = document.querySelector(
  ".side-bar .side-bar-links .side-bar-dropped-menu"
);
const showedList = document.querySelector(
  ".side-bar .side-bar-links .side-bar-dropped-menu .side-bar-drop-down-menu"
);

// showLinks.addEventListener("click", function () {
//   if (showedList.style.height === "165px") {
//     showedList.style.height = "0px";
//   } else {
//     showedList.style.height = "165px";
//   }
// });

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
let landingDiv = document.querySelector("div[data-set = 'landing-on']");
let mainBg = document.querySelector(".main-bg");
let allSections = [
  aboutUsDiv,
  servicesDiv,
  testimonialsDiv,
  feedBackDiv,
  landingDiv,
];

let allLinks = [...sideBarLinks, ...navBarLinks];
let overlaySidebar = document.querySelector(".overlay-sidebar");

console.log(landingDiv);

sessionStorage.setItem("CP", "landing-on");

overlaySidebar.addEventListener("click", () => {
  sideBar.classList.remove("side-bar-show");
  document.body.classList.remove("not-touchable");
  overlaySidebar.classList.remove("display");
});

sideBarLinks.forEach((e) => {
  e.addEventListener("click", () => {
    overlaySidebar.classList.remove("display");
    sideBar.classList.remove("side-bar-show");
    document.body.classList.remove("not-touchable");
  });
});

allLinks.forEach((e) => {
  e.addEventListener("click", (ele) => {
    sessionStorage.setItem("CP", ele.target.getAttribute("data-set"));
    allSections.forEach((e) => {
      e.style.display = "none";
      if (e.getAttribute("data-set") === sessionStorage.CP) {
        e.style.display = "block";
        if (e.getAttribute("data-set") === "landing-on")
          e.style.display = "flex";
      }
    });
    navBarLinks.forEach((e) => {
      e.classList.remove("linkes-active");
      if (e.getAttribute("data-set") === sessionStorage.CP)
        e.classList.add("linkes-active");
    });
  });
});

navBarLinks.forEach((e) => {
  e.classList.remove("linkes-active");
  if (e.getAttribute("data-set") === sessionStorage.CP)
    e.classList.add("linkes-active");
});

allSections.forEach((e) => {
  e.style.display = "none";
  if (e.getAttribute("data-set") === sessionStorage.CP) {
    e.style.display = "block";
    if (e.getAttribute("data-set") === "landing-on") e.style.display = "flex";
  }
});

//Letters Animations && show animation

const headerSection = document.querySelectorAll(".head-line");

allLinks.forEach((e) => {
  e.addEventListener("click", () => {
    headerSection.forEach((e) => {
      e.classList.remove("show-header-section");
    });
    setTimeout(() => {
      headerSection.forEach((e) => {
        e.classList.add("show-header-section");
      });
    }, 200);
  });
});

const lettersH1 = document.querySelectorAll(".head-line h1:nth-child(2)");
const testimonialsHeaderText =
  "Don't take our word for it. Over 100+ peaple trust us.";

const servicesHeaderText = "Your Trusted Partner for Wellness and Wellbeing.";
const aboutUsHeaderText =
  "Dedicated to Providing Quality Healthcare and Personalized Service.";
let counter = 0;

//about us section

let _40K = document.querySelector(".numbers div:nth-child(1) h1");
let _600 = document.querySelector(".numbers div:nth-child(2) h1");
let _12 = document.querySelector(".numbers div:nth-child(3) h1");
let _20K = document.querySelector(".numbers div:nth-child(4) h1");
let _40Kcounter = 0;
let _20Kcounter = 0;
let _600counter = 0;
let _12counter = 0;
setInterval((e) => {
  _40K.innerHTML = `${_40Kcounter}K`;
  _40Kcounter++;
  if (_40Kcounter === 41) {
    clearInterval(1);
  }
}, 20);
setInterval((e) => {
  _600.innerHTML = `${_600counter}`;
  _600counter += 20;
  if (_600counter >= 601) {
    clearInterval(2);
  }
}, 20);
setInterval((e) => {
  _20K.innerHTML = `${_20Kcounter}K`;
  _20Kcounter++;
  if (_20Kcounter === 21) {
    clearInterval(3);
  }
}, 20);
setInterval((e) => {
  _12.innerHTML = `${_12counter}`;
  _12counter++;
  if (_12counter === 13) {
    clearInterval(4);
  }
}, 20);

let myAnimatedDiv = document.querySelectorAll(".anima-off");

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anim");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  myAnimatedDiv.forEach((element) => {
    observer.observe(element);
  });
});

// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.8,
// };

// const observe = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       myAnimatedDiv.forEach((e) => {
//         e.classList.add("anim");
//       });
//     } else {
//       myAnimatedDiv.forEach((e) => {
//         e.classList.remove("anim");
//       });
//     }
//   });
// }, options);

// myAnimatedDiv.forEach((e) => {
//   observe.observe(e);
// });

//Overlay Handle

function showLoadingOverlay() {
  const loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.classList.add("visible");
}

// Function to hide the loading overlay
function hideLoadingOverlay() {
  const loadingOverlay = document.getElementById("loadingOverlay");
  loadingOverlay.classList.remove("visible");
}

// Add click event listeners to navigation links
document.querySelectorAll(".linkedPage").forEach((link) => {
  link.addEventListener("click", function (event) {
    showLoadingOverlay();
  });
});

// Hide the loading overlay once the page is fully loaded
window.addEventListener("load", function () {
  hideLoadingOverlay();
});

// Handle browser back and forward navigation
window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    hideLoadingOverlay();
  }
});
