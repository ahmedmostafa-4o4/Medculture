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
  if (e.getAttribute("data-set") === sessionStorage.CP) {
    e.style.display = "block";
    if (e.getAttribute("data-set") === "landing-on") e.style.display = "flex";
  } else {
    e.style.display = "none";
  }
});

regex = /mainPage\.html$/;
regex2 = /app\/$/;

if (regex.test(location.href) || regex2.test(location.href))
  landingDiv.style.display = "flex";
else landingDiv.style.display = "none";

//Letters Animations && show animation

const headerSection = document.querySelectorAll(".head-line");

headerSection.forEach((e) => {
  e.classList.remove("show-header-section");
});
setTimeout(() => {
  headerSection.forEach((e) => {
    e.classList.add("show-header-section");
  });
}, 200);

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
// setInterval((e) => {
//   _40K.innerHTML = `${_40Kcounter}K`;
//   _40Kcounter++;
//   if (_40Kcounter === 41) {
//     clearInterval(1);
//   }
// }, 20);
// setInterval((e) => {
//   _600.innerHTML = `${_600counter}`;
//   _600counter += 20;
//   if (_600counter >= 601) {
//     clearInterval(2);
//   }
// }, 20);
// setInterval((e) => {
//   _20K.innerHTML = `${_20Kcounter}K`;
//   _20Kcounter++;
//   if (_20Kcounter === 21) {
//     clearInterval(3);
//   }
// }, 20);
// setInterval((e) => {
//   _12.innerHTML = `${_12counter}`;
//   _12counter++;
//   if (_12counter === 13) {
//     clearInterval(4);
//   }
// }, 20);

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

//Start Account Page

let mainPage = document.querySelector(".main");
let accountPage = document.querySelector(".account-page");

function openAccountPage() {
  mainPage.style.display = "none";
  accountPage.style.display = "flex";
}

function back() {
  mainPage.style.display = "block";
  accountPage.style.display = "none";
}

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
    sideBarbtns.forEach(function (ele) {
      sideBarSet = e.currentTarget.getAttribute("data-set");
      ele.classList.remove("active");
      if (
        e.currentTarget.getAttribute("data-set") ===
        ele.getAttribute("data-set")
      ) {
        ele.classList.add("active");
      }
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

// Wishlist Page

let cloneProductBox;
const atwl = document.querySelectorAll(".atwl i");
const wishlistPage = document.querySelector(".wish-list-page");
const alertBtn = document.querySelector(".user-wishlist span");
const userAlert = document.querySelector(".red-alert");

let myCounter = 0;
if (myCounter === 0) {
  userAlert.style.display = "none";
  alertBtn.style.display = "none";
} else {
  userAlert.style.display = "block";
  alertBtn.style.display = "block";
}

atwl.forEach((e) => {
  e.addEventListener("click", (ele) => {
    if (ele.currentTarget.classList.contains("fa-solid")) {
      ele.currentTarget.classList.replace("fa-solid", "fa-regular");
      wishlistPage.childNodes.forEach((e) => {
        if (
          e.id ===
          ele.currentTarget.parentNode.parentNode.parentNode.parentNode.id
        ) {
          wishlistPage.removeChild(e);
        }
      });
      myCounter--;
    } else {
      ele.currentTarget.classList.replace("fa-regular", "fa-solid");
      cloneProductBox =
        ele.currentTarget.parentNode.parentNode.parentNode.parentNode.cloneNode(
          true
        );
      let rmBtn = document.createElement("div");
      rmBtn.setAttribute("class", "rm-btn");
      let removeText = document.createTextNode("Remove");
      rmBtn.append(removeText);
      cloneProductBox.children[1].children[3].children[0].remove();
      cloneProductBox.children[1].children[3].appendChild(rmBtn);
      wishlistPage.append(cloneProductBox);
      myCounter++;
    }

    //products transitions to order page
    buyNowBtn = document.querySelectorAll(".buy-now ");
    buyNowBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        removeProductInSessionStorage();
        sessionStorage.setItem(
          `${e.currentTarget.parentNode.parentNode.parentNode.id}`,
          [
            e.currentTarget.parentNode.parentNode.parentNode
              .querySelector(".product-img img")
              .getAttribute("src"),
            e.currentTarget.parentNode.parentNode.parentNode.querySelector(
              ".product-name"
            ).textContent,
            e.currentTarget.parentNode.parentNode.parentNode.querySelector(
              ".product-price"
            ).firstChild.textContent,
            e.currentTarget.parentNode.parentNode.parentNode.getAttribute(
              "data-set"
            ),
          ]
        );
      });
    });
    //products transitions to order page

    document.querySelectorAll(".buy-now a").forEach((link) => {
      link.addEventListener("click", function (event) {
        showLoadingOverlay();
      });
    });
    removeProduct(ele.currentTarget);

    if (myCounter === 0) {
      userAlert.style.display = "none";
      alertBtn.style.display = "none";
    } else {
      userAlert.style.display = "block";

      alertBtn.style.display = "block";
    }
  });
});

function removeProduct(starIcon) {
  const removeSavedProduct = document.querySelectorAll(".rm-btn");
  removeSavedProduct.forEach((e) => {
    e.addEventListener("click", (ele) => {
      if (
        ele.currentTarget.parentNode.parentNode.parentNode.parentNode.id ===
        starIcon.parentNode.parentNode.parentNode.id
      )
        starIcon.classList.replace("fa-solid", "fa-regular");
      ele.currentTarget.parentNode.parentNode.parentNode.remove();
      if (wishlistPage.innerHTML === "") {
        userAlert.style.display = "none";
        alertBtn.style.display = "none";
      } else {
        userAlert.style.display = "block";

        alertBtn.style.display = "block";
      }
    });
  });
}

let alarms = [];
let alarmTimeouts = {};
let countdownIntervals = {};

function toggleAlarmForm() {
  const alarmForm = document.getElementById("alarmForm");
  alarmForm.style.display =
    alarmForm.style.display === "none" ? "block" : "none";
}

document.querySelector(".new-alarm-box").addEventListener("submit", (e) => {
  e.preventDefault();
});

function addAlarm() {
  const alarmName = document.getElementById("alarmName").value;
  const alarmTimeValue = document.getElementById("alarmTime").value;

  if (!alarmName || !alarmTimeValue) {
    alert("الرجاء إدخال اسم المنبه ووقت صحيح");
    return;
  }

  const selectedDays = [];
  for (let i = 0; i < 7; i++) {
    if (
      document.getElementById(
        [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][i]
      ).checked
    ) {
      selectedDays.push(i);
    }
  }

  if (selectedDays.length === 0) {
    alert("الرجاء اختيار يوم واحد على الأقل");
    return;
  }

  const alarm = {
    name: alarmName,
    time: alarmTimeValue,
    days: selectedDays,
    active: true,
    nextAlarmTime: null,
  };

  alarms.push(alarm);
  displayAlarms();
  toggleAlarmForm();
}

function displayAlarms() {
  const alarmList = document.getElementById("alarmList");
  alarmList.innerHTML = "";
  alarms.forEach((alarm, index) => {
    const alarmItem = document.createElement("div");
    alarmItem.className = "alarm-holder";
    alarmItem.innerHTML = `
    <div class = 'alarm-info'>
                        <p class = 'alarm-name'>${alarm.name}</p>
                        ${formatTime(alarm.time)}
                        ${alarm.days
                          .map(
                            (day) =>
                              [
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                              ][day]
                          )
                          .join(", ")}<br>
                        <span id="countdown-${index}"Ring in: --:--:--</span>
                        </div>
                    <div class = 'btns'>
                        <button onclick="toggleAlarm(${index})">${
      alarm.active ? "Pause" : "Play"
    }</button>
                        <button onclick="removeAlarm(${index})" class = 'rm-btn'>Delete</button>
                        </div>
                `;
    alarmList.appendChild(alarmItem);

    if (alarm.active) {
      setAlarm(alarm, index);
    }
  });
}

function formatTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  const ampm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute.toString().padStart(2, "0")} ${ampm}`;
}

function setAlarm(alarm, index) {
  const alarmTimeParts = alarm.time.split(":");
  const alarmHours = parseInt(alarmTimeParts[0]);
  const alarmMinutes = parseInt(alarmTimeParts[1]);

  clearTimeout(alarmTimeouts[index]);
  clearInterval(countdownIntervals[index]);

  const currentTime = new Date();
  const currentDay = currentTime.getDay();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();

  let nextAlarmTime;
  let daysUntilAlarm = 0;

  for (let i = 0; i < 7; i++) {
    const potentialDay = (currentDay + i) % 7;
    if (alarm.days.includes(potentialDay)) {
      nextAlarmTime = new Date(currentTime);
      nextAlarmTime.setDate(currentTime.getDate() + i);
      nextAlarmTime.setHours(alarmHours);
      nextAlarmTime.setMinutes(alarmMinutes);
      nextAlarmTime.setSeconds(0);
      if (nextAlarmTime > currentTime) {
        daysUntilAlarm = i;
        break;
      } else if (i === 0 && nextAlarmTime < currentTime) {
        // إذا كان اليوم نفسه ولكن الوقت قد انتهى، ضعه للأسبوع القادم
        nextAlarmTime.setDate(currentTime.getDate() + 7);
        daysUntilAlarm = 7;
        break;
      }
    }
  }

  alarm.nextAlarmTime = nextAlarmTime;
  const timeDifference = nextAlarmTime - currentTime;

  alarmTimeouts[index] = setTimeout(() => {
    showNotification("Med Culture Alarm", "Time up please take your medicin.");
    const notificationItem = document.createElement("div");
    notificationItem.className = "items";
    notificationItem.innerHTML = `
    <h2>Alarm</h2>
                  <p>Alarm name: ${alarm.name}</p>
                  <p>Ringed!!</p>
                  <button type="submit">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
    `;
    document
      .querySelector(".notification-list form")
      .appendChild(notificationItem);
    let alarmShow = setInterval(() => {
      document.querySelector(".time-up").style.right = "0";
    }, 1000);
    setTimeout(() => {
      clearInterval(alarmShow);
      document.querySelector(".time-up").style.right = "-200px";
    }, 2000);
  }, timeDifference);

  alarmTimeouts[index] = setTimeout(() => {
    showNotification(
      "Med Culture Alarm",
      `Your Alarm Will Ring In ${Math.floor(timeDifference / 1000 / 60)} Mins!`
    );
    const notificationItem = document.createElement("div");
    notificationItem.className = "items";
    notificationItem.innerHTML = `
    <h2>Alarm</h2>
                  <p>Alarm name: ${alarm.name}</p>
                  <p>Will Ring After ${Math.floor(
                    timeDifference / 1000 / 60
                  )} Mins</p>
                  <button type="submit">
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
    `;
    document
      .querySelector(".notification-list form")
      .appendChild(notificationItem);
    let alarmShow = setInterval(() => {
      document.querySelector(".time-up").style.right = "0";
    }, 1000);
    setTimeout(() => {
      clearInterval(alarmShow);
      document.querySelector(".time-up").style.right = "-200px";
    }, 2000);
  }, timeDifference - 15 * 60 * 1000);

  updateCountdown(nextAlarmTime, index);
}

function updateCountdown(alarmTime, index) {
  countdownIntervals[index] = setInterval(() => {
    const currentTime = new Date();
    const timeDifference = alarmTime - currentTime;

    if (timeDifference <= 0) {
      clearInterval(countdownIntervals[index]);
      document.getElementById(`countdown-${index}`).textContent =
        "Ring in : 00:00:00";
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById(
      `countdown-${index}`
    ).textContent = `Ring in: ${days} Day ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}

function removeAlarm(index) {
  clearTimeout(alarmTimeouts[index]);
  clearInterval(countdownIntervals[index]);
  alarms.splice(index, 1);
  displayAlarms();
}

function toggleAlarm(index) {
  alarms[index].active = !alarms[index].active;
  if (alarms[index].active) {
    setAlarm(alarms[index], index);
  } else {
    clearTimeout(alarmTimeouts[index]);
    clearInterval(countdownIntervals[index]);
    document.getElementById(`countdown-${index}`).textContent =
      "Ring in : --:--:--";
  }
  displayAlarms();
}

function requestNotificationPermission() {
  Notification.requestPermission().then(function (result) {
    if (result === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission denied.");
    }
  });
}

function showNotification(header, body) {
  if (Notification.permission === "granted") {
    new Notification(header, {
      body: body,
    });
  }
}

//End Account Page

//Start Product Transfare To Order Page

const buyAllBtn = document.querySelector(".buy-all-btn");

buyAllBtn.addEventListener("click", () => {
  const wishlistProducts = document.querySelectorAll(
    ".wish-list-page .product-holder"
  );

  removeProductInSessionStorage(wishlistProducts);
  addProductInSessionStorage(wishlistProducts);
});

function removeProductInSessionStorage() {
  for (let i = 0; i < sessionStorage.length + 1; i++) {
    if (!isNaN(sessionStorage.key(i))) {
      sessionStorage.removeItem(sessionStorage.key(i));
    }
  }
}

buyNowBtn = document.querySelectorAll(".buy-now ");
removeProductInSessionStorage();

buyNowBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    removeProductInSessionStorage();

    sessionStorage.setItem(
      `${e.currentTarget.parentNode.parentNode.parentNode.id}`,
      [
        e.currentTarget.parentNode.parentNode.parentNode
          .querySelector(".product-img img")
          .getAttribute("src"),
        e.currentTarget.parentNode.parentNode.parentNode.querySelector(
          ".product-name"
        ).textContent,
        e.currentTarget.parentNode.parentNode.parentNode.querySelector(
          ".product-price"
        ).firstChild.textContent,
        e.currentTarget.parentNode.parentNode.parentNode.getAttribute(
          "data-set"
        ),
      ]
    );
  });
});

function addProductInSessionStorage(products) {
  products.forEach((e) => {
    sessionStorage.setItem(`${e.id}`, [
      e.querySelector(".product-img img").getAttribute("src"),
      e.querySelector(".product-name").textContent,
      e.querySelector(".product-price").firstChild.textContent,
      e.getAttribute("data-set"),
    ]);
  });
}

let currentLocation = location.href;
let _allSections = [aboutUsDiv, servicesDiv, testimonialsDiv, feedBackDiv];

_allSections.forEach((e) => {
  if (currentLocation.endsWith(`${e.getAttribute("data-set")}`))
    e.style.display = "block";
  else e.style.display = "none";
});
