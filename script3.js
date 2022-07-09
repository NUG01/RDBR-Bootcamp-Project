"use strict";

const arrow = document.querySelectorAll(".opt1");
const options = document.querySelectorAll(".options1");
const arr = document.querySelectorAll(".forArr");
const opts1 = document.querySelector(".options1");
const opts2 = document.querySelector(".options2");
const ticks2 = document.querySelector(".num2div");
const num2 = document.querySelector(".num2");
const arr1 = document.querySelector(".forArr");
const arr2 = document.querySelector(".forArr2");
const levels = document.querySelectorAll(".option");
const updateLevel = document.querySelector(".opt1");
const levels2 = document.querySelectorAll(".optionApi");
const updateLevel2 = document.querySelector(".opt2");
const op1 = document.querySelector(".op1");
const op2 = document.querySelector(".op2");
const op3 = document.querySelector(".op3");
const opa1 = document.querySelector(".opa1");
const opa2 = document.querySelector(".opa2");
const opa3 = document.querySelector(".opa3");
const opa4 = document.querySelector(".opa4");
const players = document.querySelector(".selected2");
const selected = document.querySelectorAll(".selected");
const optionOne = document.querySelectorAll(".option");
const allOpts = document.querySelectorAll(".op");
const selected1 = document.querySelector(".selected1");
const selected2 = document.querySelector(".selected2");
const option = document.querySelectorAll(".option");
const optionApi = document.querySelectorAll(".optionApi");
const forArr2 = document.querySelector(".forArr2");
const forArr = document.querySelector(".forArr");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const radios = document.querySelectorAll(".rad");
const radiol = document.querySelectorAll(".radiol");
const p1 = document.querySelector(".opt1");
const p2 = document.querySelector(".opt2");
let radnoi1 = document.querySelector(".radnoi1");
let radnoi2 = document.querySelector(".radnoi2");
const submit = document.querySelector(".start");
const radioP = document.querySelector(".radioP");
const form = document.querySelector(".inputs");
const radiola = document.querySelector(".radiola");
const optionP = document.querySelector(".optionP");
const act1 = document.querySelector(".act1");
const act2 = document.querySelector(".act2");
const radioError = document.querySelector(".radios");
let n = 0;
let n2 = 0;

const request = new XMLHttpRequest();
request.open("GET", "https://chess-tournament-api.devtest.ge/api/grandmasters");
request.send();
request.addEventListener("load", function () {
  const length = JSON.parse(this.response).length;
  const [id1, id2, id3, id4] = JSON.parse(this.responseText);
  const optCont = document.querySelector(".forArr2");
  const total = document.querySelector(".total");
  const opiate1 = document.querySelector(".op1");
  const opiate2 = document.querySelector(".op2");
  const opiate3 = document.querySelector(".op3");
  const opiate4 = document.querySelector(".op4");
  const opiate5 = document.querySelector(".op5");
  /************************ USING API TO SEND HTML TO INDEX3.HTML AND DISPLAY PROPER DATA***************/
  const htmlarr = `<p class="opt2 optionP">Choose your character <span>*</span></p><svg class="arrow arrow2" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3531 0.645993C13.3997 0.692439 13.4366 0.747614 13.4618 0.80836C13.487 0.869105 13.5 0.934226 13.5 0.999993C13.5 1.06576 13.487 1.13088 13.4618 1.19163C13.4366 1.25237 13.3997 1.30755 13.3531 1.35399L7.35311 7.35399C7.30666 7.40056 7.25148 7.4375 7.19074 7.46271C7.12999 7.48791 7.06487 7.50089 6.99911 7.50089C6.93334 7.50089 6.86822 7.48791 6.80747 7.46271C6.74673 7.4375 6.69155 7.40056 6.64511 7.35399L0.645106 1.35399C0.55122 1.26011 0.498475 1.13277 0.498475 0.999993C0.498475 0.867218 0.55122 0.73988 0.645106 0.645993C0.738993 0.552107 0.866331 0.499362 0.999106 0.499362C1.13188 0.499362 1.25922 0.552107 1.35311 0.645993L6.99911 6.29299L12.6451 0.645993C12.6916 0.59943 12.7467 0.562487 12.8075 0.537281C12.8682 0.512074 12.9333 0.4991 12.9991 0.4991C13.0649 0.4991 13.13 0.512074 13.1907 0.537281C13.2515 0.562487 13.3067 0.59943 13.3531 0.645993Z" fill="#212529"/>
   </svg>`;
  optCont.insertAdjacentHTML("beforeend", htmlarr);

  const html = `<p class="length">(Total ${length})</p>`;
  total.insertAdjacentHTML("beforeend", html);

  const html1 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id1.name}</label>
      <img class="apimg" src="https://chess-tournament-api.devtest.ge/${id1.image}"/>`;
  opiate1.insertAdjacentHTML("beforeend", html1);

  const html2 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id2.name}</label>
      <img class="apimg" src="https://chess-tournament-api.devtest.ge/${id2.image}"/>`;
  opiate2.insertAdjacentHTML("beforeend", html2);

  const html3 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id3.name}</label>
      <img class="apimg" src="https://chess-tournament-api.devtest.ge/${id3.image}"/>`;
  opiate3.insertAdjacentHTML("beforeend", html3);

  const html4 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id4.name}</label>
      <img class="apimg" src="https://chess-tournament-api.devtest.ge/${id4.image}"/>`;
  opiate4.insertAdjacentHTML("beforeend", html4);

  const html5 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">other</label>
      <img class="apimg" src="/images/default.png"/>`;
  opiate5.insertAdjacentHTML("beforeend", html5);

  selected.forEach((sel) => {
    sel.addEventListener("click", () => {
      sel.classList.toggle("active");
      if (sel.classList.contains("selected2")) {
        sel.previousElementSibling.classList.remove("active");
      } else if (sel.classList.contains("selected1")) {
        sel.nextElementSibling.classList.remove("active");
      }
    });
  });

  /***GETTING LEVEL OF KNOWLEDGE AND CHARACTER VALUES IN SESSION STORAGE****/
  levels.forEach((e) => {
    e.addEventListener("click", function () {
      sessionStorage.setItem("experience_level", e.innerText);
    });
  });
  levels2.forEach((e) => {
    e.addEventListener("click", function () {
      sessionStorage.setItem("character_id", id(e));
    });
  });
  /********IF SELECTED INPUTS OBJECT IS FIRST IN THE DECONSTRUCTED ARRAY ABOVE, THEN IT RETURNS
   * THIS NAMES ID
   */
  function id(e) {
    if (e.innerText == `${id1.name}`) {
      return id1.id;
    } else if (e.innerText == `${id2.name}`) {
      return id2.id;
    } else if (e.innerText.includes(`${id3.name}`)) {
      return id3.id;
    } else if (e.innerText == `${id4.name}`) {
      return id4.id;
    } else if (e.innerText.includes("other")) {
      return "5";
    }
  }
});

/********GETTING DATA FROM SESSION STORAGE TO FILL INPUTS WITH FILLED VALUES AND NOT DELETING AFTER REFRESH********/
window.onload = function () {
  const request2 = new XMLHttpRequest();
  request2.open(
    "GET",
    "https://chess-tournament-api.devtest.ge/api/grandmasters"
  );
  request2.send();
  request2.addEventListener("load", function () {
    const [idi1, idi2, idi3, idi4] = JSON.parse(this.responseText);
    if (sessionStorage.getItem("experience_level")) {
      n2++;
      num2.classList.add("num2back");
      p1.innerHTML = sessionStorage.getItem("experience_level");
    }
    if (sessionStorage.getItem("character_id")) {
      n++;
      num2.classList.add("num2back");
      forArr2.firstChild.innerHTML = char();
    }
    /*********THIS FUNCTIONS LOADS COMPATIBLE IMAGE WITH ID AND SEND STRING TO HTML***********/
    function char() {
      if (sessionStorage.getItem("character_id") == idi1.id) {
        let str = `<p>${idi1.name}</p><img class="apimg2" src="https://chess-tournament-api.devtest.ge/${idi1.image}"/>`;
        return str;
      }
      if (sessionStorage.getItem("character_id") == idi2.id) {
        let str2 = `<p>${idi2.name}</p><img class="apimg2" src="https://chess-tournament-api.devtest.ge/${idi2.image}"/>`;
        return str2;
      }
      if (sessionStorage.getItem("character_id") == idi3.id) {
        let str3 = `<p>${idi3.name}</p><img class="apimg2" src="https://chess-tournament-api.devtest.ge/${idi3.image}"/>`;
        return str3;
      }
      if (sessionStorage.getItem("character_id") == idi4.id) {
        let str4 = `<p>${idi4.name}</p><img class="apimg2" src="https://chess-tournament-api.devtest.ge/${idi4.image}"/>`;
        return str4;
      }
      if (sessionStorage.getItem("character_id") == 5) {
        let str5 = `<p>other</p><img class="apimg2" src="images/default.png"/>`;
        return str5;
      }
    }
  });
  /*********RADIO BUTTONS FUNCTIONALITY**********/
  let yesNo = sessionStorage.getItem("already_participated");
  if (yesNo == "true") {
    act1.classList.add("activated");
  } else if (yesNo == "false") {
    act2.classList.add("activated");
  }
};
/***************CHOOSING FROM OPTIONS AND SETTING IT AS INPUT INNER_HTML***********8*/
allOpts.forEach((optn) => {
  optn.addEventListener("click", () => {
    num2.classList.add("num2back");
    if (optn.parentElement.classList.contains("options1")) {
      forArr.innerHTML = `<p class='optionP opt1'>${optn.textContent}</p>
      <svg
        class="arrow arrow1"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.3531 0.645993C13.3997 0.692439 13.4366 0.747614 13.4618 0.80836C13.487 0.869105 13.5 0.934226 13.5 0.999993C13.5 1.06576 13.487 1.13088 13.4618 1.19163C13.4366 1.25237 13.3997 1.30755 13.3531 1.35399L7.35311 7.35399C7.30666 7.40056 7.25148 7.4375 7.19074 7.46271C7.12999 7.48791 7.06487 7.50089 6.99911 7.50089C6.93334 7.50089 6.86822 7.48791 6.80747 7.46271C6.74673 7.4375 6.69155 7.40056 6.64511 7.35399L0.645106 1.35399C0.55122 1.26011 0.498475 1.13277 0.498475 0.999993C0.498475 0.867218 0.55122 0.73988 0.645106 0.645993C0.738993 0.552107 0.866331 0.499362 0.999106 0.499362C1.13188 0.499362 1.25922 0.552107 1.35311 0.645993L6.99911 6.29299L12.6451 0.645993C12.6916 0.59943 12.7467 0.562487 12.8075 0.537281C12.8682 0.512074 12.9333 0.4991 12.9991 0.4991C13.0649 0.4991 13.13 0.512074 13.1907 0.537281C13.2515 0.562487 13.3067 0.59943 13.3531 0.645993Z"
          fill="#212529"
        />
      </svg>`;
      n2++;
    }
    /***********WHATEVER OPTION IS CLICKED, ITS IMG IS SET IN INPUT WHEN IT IS CHOSEN RIGHT AFTER CHOSEN NAME*************/
    if (optn.parentElement.classList.contains("options2")) {
      forArr2.innerHTML = `<p class="opt2 optionP">${
        optn.textContent
      }</p><img class="apimg2" src='${optn
        .querySelector("img")
        .getAttribute(
          "src"
        )}'><svg class="arrow arrow2" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3531 0.645993C13.3997 0.692439 13.4366 0.747614 13.4618 0.80836C13.487 0.869105 13.5 0.934226 13.5 0.999993C13.5 1.06576 13.487 1.13088 13.4618 1.19163C13.4366 1.25237 13.3997 1.30755 13.3531 1.35399L7.35311 7.35399C7.30666 7.40056 7.25148 7.4375 7.19074 7.46271C7.12999 7.48791 7.06487 7.50089 6.99911 7.50089C6.93334 7.50089 6.86822 7.48791 6.80747 7.46271C6.74673 7.4375 6.69155 7.40056 6.64511 7.35399L0.645106 1.35399C0.55122 1.26011 0.498475 1.13277 0.498475 0.999993C0.498475 0.867218 0.55122 0.73988 0.645106 0.645993C0.738993 0.552107 0.866331 0.499362 0.999106 0.499362C1.13188 0.499362 1.25922 0.552107 1.35311 0.645993L6.99911 6.29299L12.6451 0.645993C12.6916 0.59943 12.7467 0.562487 12.8075 0.537281C12.8682 0.512074 12.9333 0.4991 12.9991 0.4991C13.0649 0.4991 13.13 0.512074 13.1907 0.537281C13.2515 0.562487 13.3067 0.59943 13.3531 0.645993Z" fill="#212529"/>
      </svg>`;
      n++;
    }
  });
  /***********GETTING VALUE ROM RADIO BUTTONS*************/
});
radiol.forEach((r) => {
  r.addEventListener("click", (e) => {
    if (r.parentElement.classList.contains("radio2")) {
      sessionStorage.setItem("already_participated", false);
      r.parentElement.previousElementSibling
        .querySelector("input")
        .classList.remove("activated");
      r.nextElementSibling.classList.add("activated");
    } else if (r.parentElement.classList.contains("radio1")) {
      sessionStorage.setItem("already_participated", true);
      r.parentElement.nextElementSibling
        .querySelector("input")
        .classList.remove("activated");
      r.nextElementSibling.classList.add("activated");
    }
  });
});
/**********VALIDATION FUNCTION THAT USES INCREMENTS WHICH WAS USED WHEN INPUT VALUES WHERE CLICKED,
 * IF N OR N2 ISNT 0, THAT MEANS VALUE WAS CHOSEN AND THERE IS NO REASON TO NOT VALIDATE, IF NOT, ADDING RED BACKGROUND************/
let r = 0;
let v = 0;
function validation() {
  if (!n2 > 0) {
    // forArr.classList.add("bordered");
    selected1.classList.add("fortool");
    v++;
  }
  if (!n > 0) {
    // forArr2.classList.add("bordered");
    selected2.classList.add("fortool");
    v++;
  }
  /****SEARCHES IF RADIO BUTTON AS ACTIVATED WITH SESSION STORAGE DATA*****/
  if (!sessionStorage.getItem("already_participated")) {
    // radioP.classList.add("redio");
    radioError.classList.add("fortool");
    v++;
  }
  allOpts.forEach((ev) => {
    ev.addEventListener("click", () => {
      // ev.parentElement.previousElementSibling.classList.remove("bordered");
      // ev.parentElement.parentElement.classList.remove("fortool");
      if (ev.parentElement.classList.contains("options1")) {
        selected1.classList.remove("fortool");
      } else {
        selected2.classList.remove("fortool");
      }
    });
  });

  radiol.forEach((rad) => {
    rad.addEventListener("click", () => {
      // radioP.classList.remove("redio");
      radioError.classList.remove("fortool");
      r++;
    });
  });
  /**********IF THESE INPUTS DONT CONTAIN ANY VALIDATION ERROR CLASS, SUBMIT IS POSIBLE AND DATA IS SENT TO THE SERVER*******/
  if (
    !selected1.classList.contains("fortool") &&
    !selected2.classList.contains("fortool") &&
    !radioError.classList.contains("fortool")
  ) {
    form.submit();
    return true;
  }
}
let storage = {};
Object.keys(sessionStorage).forEach((key) => {
  storage[key] = sessionStorage.getItem(key);
});
/**************BELOW CODE TRANSLATING STRING TRUE AND FALSE INTO BOOLEAN VALUES SINCE SESSION STORAGE
 * CANT STORE BOOLEANS, SAME FOR NUMBER*****************/
if (sessionStorage.getItem("already_participated") == "true") {
  storage["already_participated"] = JSON.parse(
    sessionStorage.getItem("already_participated") === true
  );
} else {
  storage["already_participated"] = JSON.parse(
    sessionStorage.getItem("already_participated") !== false
  );
}
/***********GETTING UNCAUGHT SYNTAX ERROR UNXPECTED END OF JSON AND UNPROCESSABLE ENTITY:( **************/
storage["character_id"] = Number(sessionStorage.getItem("character_id"));

/****FINALLY, SENDING COLLECTED DATA ON SUBMIT IF EVERYTHING IS VALID******/
form.addEventListener("submit", (e) => {
  if (validation()) {
    validation();
    post();
  } else {
    e.preventDefault();
  }
});

function post() {
  let storage = {};
  Object.keys(sessionStorage).forEach((key) => {
    storage[key] = sessionStorage.getItem(key);
  });
  /**************BELOW CODE TRANSLATING STRING TRUE AND FALSE INTO BOOLEAN VALUES SINCE SESSION STORAGE
   * CANT STORE BOOLEANS, SAME FOR NUMBER*****************/
  if (sessionStorage.getItem("already_participated") == "true") {
    storage["already_participated"] = JSON.parse(
      sessionStorage.getItem("already_participated") === true
    );
  } else {
    storage["already_participated"] = JSON.parse(
      sessionStorage.getItem("already_participated") !== false
    );
  }
  /***********GETTING UNCAUGHT SYNTAX ERROR UNXPECTED END OF JSON AND UNPROCESSABLE ENTITY:( **************/
  storage["character_id"] = Number(sessionStorage.getItem("character_id"));
  let data = JSON.stringify(storage);
  fetch("https://chess-tournament-api.devtest.ge/api/register", {
    method: "POST",
    body: JSON.stringify(storage),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("error");
    });
}

// const req = new XMLHttpRequest();
// req.onreadystatechange = function () {
//   if (req.readyState == 4) {
//     console.log("half");
//     if (req.status === 200) {
//       console.log("successful");
//     }
//   } else {
//     console.log(req.responseText);
//   }
//   if (req.status == 400) {
//     console.log("ouch");
//   }
// };
// // req.setRequestHeader("Content-type", "application/json; charset=utf-8");
// req.open(
//   "POST",
//   "https://chess-tournament-api.devtest.ge/api/register",
//   true
// );
// req.setRequestHeader("Content-type", "application/json; charset=utf-8");
// console.log(data);
// req.send(data);
// console.log(req.status);
// });
