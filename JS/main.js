// Start Slider Handling

let slider = document.querySelector(".landing");
let sliderBtn = document.getElementById("slider-btn");
let sliderBtnTextIn = document.createTextNode("Sign in");
let sliderBtnTextUp = document.createTextNode("Sign up");
let inputs = document.querySelectorAll("input");
inputs.forEach((inp) => (inp.required = true));
sliderBtn.addEventListener("click", function () {
  if (slider.style.transform === "translate(100%)") {
    sliderBtn.innerHTML = "Sign up";
    slider.style.transform = "translate(0%)";
  } else {
    sliderBtn.innerHTML = "Sign in";
    slider.style.transform = "translate(100%)";
  }
});
// End Slider Handling

// Start Sign Up Handling

let signUpEmail = document.getElementById("sign-up-email");
let signUpPassword = document.getElementById("sign-up-password");
let confirmed = document.getElementById("confirm-password");
let fullName = document.querySelector(".nameInput");
let FLName = document.querySelectorAll(".nameInput");
let emailSignUpWarning = document.getElementById("emailSignUp-span");
let passwordSignUpWarning = document.getElementById("passwordSignUp-span");
let confirmWarning = document.getElementById("confirm-span");
let signUpForm = document.querySelector(".sign-up");
let validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g;
let validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;

let array = [];
let newArray = [];
let key;

for (let i = 0; i < window.localStorage?.length; i++) {
  array.push(`${window.localStorage.getItem(window.localStorage.key(i))}`);
}
for (let i = 0; i < window.localStorage.length; i++) {
  if (window.localStorage.key(i).includes("no.")) {
    newArray[
      window.localStorage.key(i).slice(7)
    ] = `${window.localStorage.getItem(window.localStorage.key(i))}`;
  }
}

signUpForm.onsubmit = function () {
  let flag = false;

  if (
    validEmail.test(signUpEmail.value) === true &&
    validPassword.test(signUpPassword.value) === true &&
    signUpPassword.value === confirmed.value &&
    fullName.value != ""
  ) {
    if (array.includes(signUpEmail.value)) {
      signUpEmail.style.marginBottom = "0";
      emailSignUpWarning.style.display = "block";
      return flag;
    }
    window.localStorage.setItem(
      `Acc no.${window.localStorage.length}`,
      signUpEmail.value.toLowerCase()
    );
    window.localStorage.setItem(
      `Pas no.${window.localStorage.length}`,
      signUpPassword.value
    );
    window.localStorage.setItem(
      `nam no.${window.localStorage.length}`,
      `${FLName[0].value} ${FLName[1].value}`
    );
    flag = true;
    return flag;
  }
  return flag;
};
let toggleEye = document.querySelector(".pass-eye");
toggleEye.addEventListener("click", function () {
  if (signUpPassword.type === "password") {
    toggleEye.classList.replace("fa-eye", "fa-eye-slash");
    signUpPassword.type = "text";
  } else {
    toggleEye.classList.replace("fa-eye-slash", "fa-eye");
    signUpPassword.type = "password";
  }
});

// End Sign Up Handling

//Start Sign In Handling
let emailSignIn = document.getElementById("user-name-field");
let passwordSignIn = document.getElementById("password-field");
let emailSignInWarning = document.getElementById("emailSignIn-span");
let passwordSignInWarning = document.getElementById("passwordSignIn-span");
let signInForm = document.querySelector(".sign-in");
// signInForm.onsubmit = function () {
//   if (newArray.includes(emailSignIn.value)) {
//     emailSignIn.style.marginBottom = "30px";
//     emailSignInWarning.style.display = "none";
//     if (
//       passwordSignIn.value === newArray[newArray.indexOf(emailSignIn.value) + 1]
//     ) {
//       localStorage.setItem(
//         "Current Account",
//         newArray[newArray.indexOf(emailSignIn.value) + 2]
//       );
//       localStorage.setItem(
//         "Current Email",
//         newArray[newArray.indexOf(emailSignIn.value)]
//       );
//       passwordSignInWarning.style.display = "none";
//       passwordSignIn.style.marginBottom = "30px";
//       localStorage.setItem("State", "signed");
//       return true;
//     } else {
//       passwordSignInWarning.style.display = "block";
//       passwordSignIn.style.marginBottom = "0";
//       passwordSignInWarning.style.marginTop = "15px";
//       localStorage.setItem("State", "not signed");
//       return false;
//     }
//   } else {
//     emailSignIn.style.marginBottom = "0";
//     emailSignInWarning.style.display = "block";
//     emailSignInWarning.style.marginTop = "15px";
//     emailSignInWarning.style.marginBottom = "5px";
//     return false;
//   }
// };

let toggleEyeIn = document.querySelector(".pass-eye-in");
toggleEyeIn.addEventListener("click", function () {
  if (passwordSignIn.type === "password") {
    toggleEyeIn.classList.replace("fa-eye", "fa-eye-slash");
    passwordSignIn.type = "text";
  } else {
    toggleEyeIn.classList.replace("fa-eye-slash", "fa-eye");
    passwordSignIn.type = "password";
  }
});
//End Sign In Handling

//Start State Handling
let signInBtn = document.getElementById("btn");

if (localStorage.getItem("State") === "signed") {
  localStorage.setItem("State", "not Signed");
  location.assign("../Pages/Index.html");
}
//End State Handling

//Start Mobile Screen Animation

const signIn = document.querySelector(".sign-in-btn");
const signUp = document.querySelector(".sign-up-btn");
const parentDiv = document.querySelector(".parent");
signIn.addEventListener("click", () => {
  parentDiv.classList.replace("rotate-off", "rotate-on");
});
signUp.addEventListener("click", () => {
  parentDiv.classList.replace("rotate-on", "rotate-off");
});

//End Mobile Screen Animation
