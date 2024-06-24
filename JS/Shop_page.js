// Side Bar

const sideBarOpenBtn = document.getElementById("side-bar-open-btn");
const sideBarCloseBtn = document.getElementById("side-bar-close-btn");

const sideBar = document.querySelector(".side-bar");
let overlaySidebar = document.querySelector(".overlay-sidebar");

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

overlaySidebar.addEventListener("click", () => {
  sideBar.classList.remove("side-bar-show");
  document.body.classList.remove("not-touchable");
  overlaySidebar.classList.remove("display");
});

let productDes;

//Home Button Handel
const sideBarBtns = document.querySelectorAll(".side-bar-drop-down-menu li a");
const homeBtn = document.querySelector(".drop-icon");
const sidebarLinks = document.querySelectorAll(".side-bar-links li a");

sidebarLinks.forEach((e) => {
  e.addEventListener("click", (element) => {
    sessionStorage.setItem("CP", `${element.target.getAttribute("data-set")}`);
    sessionStorage.setItem("FT", null);
  });
});

sessionStorage.counter = 0;

homeBtn.addEventListener("click", () => {
  sessionStorage.FT = "firstOpen";
});

sideBarBtns.forEach((e) => {
  e.addEventListener("click", (ele) => {
    sessionStorage.setItem("FT", null);
    sessionStorage.setItem("CP", ele.target.getAttribute("data-set"));
    homeBtn.addEventListener("click", () => {});
  });
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

let productBox = document.querySelectorAll(".product-holder .product-name");

let imgSrc;
let textHeaderNode;
let textParagraphNode;
let priceNode;

const scrollBarLeftArrow = document.querySelector(".left-arrow");
const scrollBarRightArrow = document.querySelector(".right-arrow");
// const productsScrollBarLeftArrow = document.querySelector(".all-p .left-arrow");
// const productsScrollBarRightArrow = document.querySelector(
//   ".all-p .right-arrow"
// );
const scrollBar = document.querySelector(".departs");
// const productsScrollBar = document.querySelector(".products");

scrollBarLeftArrow.addEventListener("click", function () {
  scrollBar.scrollLeft -= 70;
});

scrollBarRightArrow.addEventListener("click", function () {
  scrollBar.scrollLeft += 70;
});
// productsScrollBarLeftArrow.addEventListener("click", function () {
//   productsScrollBar.scrollLeft -= 140;
// });

// productsScrollBarRightArrow.addEventListener("click", function () {
//   productsScrollBar.scrollLeft += 140;
// });

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

// Search Bar
const searchForm = document.querySelector(".search-form");
const searchBar = document.querySelector("input[type = 'search']");
const productName = document.querySelectorAll(".main .product-name");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
searchBar.addEventListener("input", (ele) => {
  productName.forEach((e) => {
    e.parentNode.parentNode.style.display = "none";
    if (e.innerHTML.toLowerCase().includes(searchBar.value.toLowerCase())) {
      e.parentNode.parentNode.style.display = "flex";
    }
  });
});

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

const alarmBtn = document.querySelector(".notification");

alarmBtn.addEventListener("click", (ele) => {
  sideBarbtns.forEach(function (element) {
    element.classList.remove("active");
    if (
      ele.currentTarget.getAttribute("data-set") ===
      element.getAttribute("data-set")
    ) {
      element.classList.add("active");
    }
  });
  rightPages.forEach(function (e) {
    if (
      e.getAttribute("data-set") === ele.currentTarget.getAttribute("data-set")
    ) {
      openAccountPage();
      e.classList.remove("page-hidden");
    } else {
      openAccountPage();
      e.classList.add("page-hidden");
    }
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
let buyNowBtn = document.querySelectorAll(".buy-now ");
let counter = 0;

if (counter === 0) {
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
      counter--;
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
      counter++;
    }
    //products transitions to order page
    buyNowBtn = document.querySelectorAll(".buy-now ");
    // buyNowBtn.forEach((button) => {
    //   button.addEventListener("click", (e) => {
    //     removeProductInSessionStorage();
    //     sessionStorage.setItem(
    //       `${e.currentTarget.parentNode.parentNode.parentNode.id}`,
    //       [
    //         e.currentTarget.parentNode.parentNode.parentNode
    //           .querySelector(".product-img img")
    //           .getAttribute("src"),
    //         e.currentTarget.parentNode.parentNode.parentNode.querySelector(
    //           ".product-name"
    //         ).textContent,
    //         e.currentTarget.parentNode.parentNode.parentNode.querySelector(
    //           ".product-price"
    //         ).firstChild.textContent,
    //         e.currentTarget.parentNode.parentNode.parentNode.getAttribute(
    //           "data-set"
    //         ),
    //       ]
    //     );

    //     productDes = document.querySelectorAll(".product-description");
    //   });
    // });
    //products transitions to order page
    document.querySelectorAll(".buy-now a").forEach((link) => {
      link.addEventListener("click", function (event) {
        showLoadingOverlay();
      });
    });
    removeProduct(ele.currentTarget);

    if (counter === 0) {
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

//Start Product Description
productDes = document.querySelectorAll(".product-description");
let desBox;
let description;
productDes.forEach((product) => {
  product.addEventListener("mouseover", (element) => {
    desBox = document.createElement("p");
    desBox.className = "product-hover";
    description = document.createTextNode(`${element.currentTarget.innerHTML}`);
    desBox.append(description);
    element.currentTarget.append(desBox);
    product.addEventListener("mouseleave", (element) => {
      desBox.remove();
    });
  });
  product.addEventListener("mouseleave", (element) => {
    desBox.remove();
  });
});

//End Product Description

// Categories

const categories = document.querySelectorAll(".departs div");
const productDivs = document.querySelectorAll(".product-holder");
categories.forEach((e) => {
  e.addEventListener("click", (ele) => {
    productDivs.forEach((e) => {
      if (
        e.getAttribute("data-set") ===
        ele.currentTarget.getAttribute("data-set")
      ) {
        e.style.display = "flex";
      } else if (ele.currentTarget.getAttribute("data-set") === "All") {
        e.style.display = "flex";
      } else {
        e.style.display = "none";
      }
    });
  });
});

//Alarm

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
document
  .querySelectorAll(".linkedPage, .buy-now a, .side-bar-drop-down-menu a")
  .forEach((link) => {
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

//Product Transfare To Order Page

const buyAllBtn = document.querySelector(".buy-all-btn");

buyAllBtn.addEventListener("click", () => {
  const wishlistProducts = document.querySelectorAll(
    ".wish-list-page .product-holder"
  );

  removeProductInSessionStorage(wishlistProducts);
  addProductInSessionStorage(wishlistProducts);
});

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

function removeProductInSessionStorage(products) {
  for (let i = 0; i < sessionStorage?.length; i++) {
    if (!isNaN(sessionStorage.key(i))) {
      sessionStorage.removeItem(sessionStorage.key(i));
    }
  }
}

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
