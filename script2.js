"use strict";

const labeli = document.querySelectorAll(".labeli");
const inputi = document.querySelectorAll(".inputi");
const name = document.querySelector("#name");
const close = document.querySelectorAll(".close");
const nameValid = document.querySelector(".name");
const emailValid = document.querySelector(".email");
const numValid = document.querySelector(".mobile");
const dateValid = document.querySelector(".date");
const num1 = document.querySelector(".num1");
const num1div = document.querySelector(".num1div");
const greenticks = document.querySelector(".greenticks");
const inpdiv1 = document.querySelector(".inpdiv1");
const inpdiv2 = document.querySelector(".inpdiv2");
const inpdiv3 = document.querySelector(".inpdiv3");
const inpdiv4 = document.querySelector(".inpdiv4");
const form = document.querySelector(".inputs");
const lab1 = document.querySelector(".lab1");
const lab2 = document.querySelector(".lab2");
const lab3 = document.querySelector(".lab3");
const lab4 = document.querySelector(".lab4");
const err1 = document.querySelector(".eror1");
const err2 = document.querySelector(".eror2");
const err3 = document.querySelector(".eror3");
const err4 = document.querySelector(".eror4");
let i = 0;
let s = 0;

/************* REGULAR EXPRESSIONS FOR INPUTS VALIDATION FUNCTION******************/
let validName = /^.{3,}$/;
let validEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validNum = /^[0-9]+$/;
let date =
  /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

/***********FOR ERROR MESSAGE CLOSE BUTTON ****************/
close.forEach((x) => {
  x.addEventListener("click", function () {
    x.parentElement.parentElement.classList.add("hidden");
  });
});

/***************WHEN PAGE LOADS, THIS CHECKS IF IT HAS ANYTHING STORED IN SESSION STORAGE,
 * IF TRUE, INPUT FIELDS GET FILLED WITH THE INFORMATION, WHICH GIVES RESISTANCE AGAINST PAGE REFRESH,
 * COUNTER IS FOR TOP NUMBER 1 TO GET REPLACED WITH GREEN CHECK ICON WHEN ALL THE INPUTS ARE FILLED, SO EVEN CHECK
 * ICON IS RESISTANT TO REFRESH
 */
window.onload = function () {
  s = 0;
  if (sessionStorage.getItem("name")) {
    nameValid.value = sessionStorage.getItem("name");
    lab1.textContent = "";
    s++;
  }
  if (sessionStorage.getItem("email")) {
    emailValid.value = sessionStorage.getItem("email");
    lab2.textContent = "";
    s++;
  }
  if (sessionStorage.getItem("phone")) {
    numValid.value = sessionStorage.getItem("phone");
    lab3.textContent = "";
    s++;
  }
  if (sessionStorage.getItem("date_of_birth")) {
    dateValid.value = sessionStorage.getItem("date_of_birth");
    lab4.textContent = "";
    s++;
  }
  if (s == 4) {
    num1.classList.add("hidden");
    greenticks.classList.remove("hidden");
    num1div.classList.add("greenBack");
  } else {
    num1.classList.remove("hidden");
    greenticks.classList.add("hidden");
  }
};
/*******************AFTER FOCUS CHANGE EVENT ON INPUT FIELD, NEW VALUE IS SAVED ON THE SESSION STORAGE***************/
inputi.forEach((e) => {
  function keyName() {
    if (e == nameValid) {
      return "name";
    } else if (e == emailValid) {
      return "email";
    } else if (e == numValid) {
      return "phone";
    } else if (e == dateValid) {
      return "date_of_birth";
    }
  }
  e.addEventListener("keyup", function () {
    num1div.classList.add("greenN");
    sessionStorage.setItem(keyName(), e.value);
  });
});

inputi.forEach((el) => {
  el.addEventListener("keydown", () => {
    el.previousElementSibling.innerHTML = "";
  });
});

/***********VALIDATION FUNCTION, WHICH DISPLAYS ERROR MESSAGES**************/
function validation() {
  if (nameValid.value.trim().match(validName)) {
    err1.classList.add("hidden");
    inpdiv1.classList.remove("inpdiv");
    i++;
  } else {
    err1.classList.remove("hidden");
    inpdiv1.classList.add("inpdiv");
  }
  if (
    emailValid.value.trim().match(validEmail) &&
    emailValid.value.toLowerCase().trim().includes("redberry.ge")
  ) {
    err2.classList.add("hidden");
    inpdiv2.classList.remove("inpdiv");
    i++;
  } else {
    err2.classList.remove("hidden");
    inpdiv2.classList.add("inpdiv");
  }
  if (numValid.value.trim().match(validNum) && numValid.value.length == 9) {
    err3.classList.add("hidden");
    inpdiv3.classList.remove("inpdiv");
    i++;
  } else {
    err3.classList.remove("hidden");
    inpdiv3.classList.add("inpdiv");
  }
  if (dateValid.value.match(date)) {
    err4.classList.add("hidden");
    inpdiv4.classList.remove("inpdiv");
    i++;
  } else {
    err4.classList.remove("hidden");
    inpdiv4.classList.add("inpdiv");
  }
}

/********************TO DISPLAY AND HIDE ERRORS AND CORRECT ANSWER CHECKS FOR EACH INPUT*/
const cor1 = document.querySelector(".correct1");
const cor2 = document.querySelector(".correct2");
const cor3 = document.querySelector(".correct3");
const cor4 = document.querySelector(".correct4");

inputi.forEach((el) => {
  el.addEventListener("change", (e) => {
    if (nameValid.value.trim().match(validName)) {
      cor1.classList.remove("hidden");
      inpdiv1.classList.remove("inpdiv");
      err1.classList.add("hidden");
    } else {
      cor1.classList.add("hidden");
    }
    if (
      emailValid.value.trim().match(validEmail) &&
      emailValid.value.toLowerCase().trim().includes("redberry.ge")
    ) {
      cor2.classList.remove("hidden");
      err2.classList.add("hidden");
      inpdiv2.classList.remove("inpdiv");
    } else {
      cor2.classList.add("hidden");
    }
    if (numValid.value.trim().match(validNum) && numValid.value.length == 9) {
      cor3.classList.remove("hidden");
      err3.classList.add("hidden");
      inpdiv3.classList.remove("inpdiv");
    } else {
      cor3.classList.add("hidden");
    }
    if (dateValid.value.match(date)) {
      cor4.classList.remove("hidden");
      err4.classList.add("hidden");
      inpdiv4.classList.remove("inpdiv");
    } else {
      cor4.classList.add("hidden");
    }
    if (
      !cor1.classList.contains("hidden") &&
      !cor2.classList.contains("hidden") &&
      !cor3.classList.contains("hidden") &&
      !cor4.classList.contains("hidden")
    ) {
      num1.classList.add("hidden");
      greenticks.classList.remove("hidden");
    } else {
      num1.classList.remove("hidden");
      greenticks.classList.add("hidden");
    }
  });
});

/*******************ADDS AND REMOVES INPUTS BACKGROUND COLOR AND FONT COLOR ON FOCUS CHANGE BASED ON INPUT VALIDITY****/
inputi.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (nameValid.value.trim().match(validName)) {
      inpdiv1.classList.remove("inpdiv");
    } else {
      inpdiv1.classList.add("inpdiv");
    }
    if (
      emailValid.value.trim().match(validEmail) &&
      emailValid.value.toLowerCase().trim().includes("redberry.ge")
    ) {
      inpdiv2.classList.remove("inpdiv");
    } else {
      inpdiv2.classList.add("inpdiv");
    }
    if (numValid.value.trim().match(validNum) && numValid.value.length == 9) {
      inpdiv3.classList.remove("inpdiv");
    } else {
      inpdiv3.classList.add("inpdiv");
    }
    if (dateValid.value.match(date)) {
      inpdiv4.classList.remove("inpdiv");
    } else {
      inpdiv4.classList.add("inpdiv");
    }
  });
});
/********FORM IS SUBMITTED IF VALIDATION IS SUCCESSFUL, IF NOT, SUBMIT DEFAULT BEHAVIOUR IS PREVENTED*********/
form.addEventListener("submit", (e) => {
  i = 0;
  validation();
  if (i == 4) {
    form.submit();
    return true;
  } else {
    e.preventDefault();
  }
});
