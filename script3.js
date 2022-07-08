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
let n = 0;
let n2 = 0;

const request = new XMLHttpRequest();
request.open("GET", "https://chess-tournament-api.devtest.ge/api/grandmasters");
request.send();
request.addEventListener("load", function () {
  const length = JSON.parse(this.response).length;
  const [id1, id2, id3, id4] = JSON.parse(this.responseText);
  // const html = `<div class="forArr forArr2"><p class="opt2 optionP">Choose your character <span>*</span></p><svg class="arrow arrow2" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  //  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3531 0.645993C13.3997 0.692439 13.4366 0.747614 13.4618 0.80836C13.487 0.869105 13.5 0.934226 13.5 0.999993C13.5 1.06576 13.487 1.13088 13.4618 1.19163C13.4366 1.25237 13.3997 1.30755 13.3531 1.35399L7.35311 7.35399C7.30666 7.40056 7.25148 7.4375 7.19074 7.46271C7.12999 7.48791 7.06487 7.50089 6.99911 7.50089C6.93334 7.50089 6.86822 7.48791 6.80747 7.46271C6.74673 7.4375 6.69155 7.40056 6.64511 7.35399L0.645106 1.35399C0.55122 1.26011 0.498475 1.13277 0.498475 0.999993C0.498475 0.867218 0.55122 0.73988 0.645106 0.645993C0.738993 0.552107 0.866331 0.499362 0.999106 0.499362C1.13188 0.499362 1.25922 0.552107 1.35311 0.645993L6.99911 6.29299L12.6451 0.645993C12.6916 0.59943 12.7467 0.562487 12.8075 0.537281C12.8682 0.512074 12.9333 0.4991 12.9991 0.4991C13.0649 0.4991 13.13 0.512074 13.1907 0.537281C13.2515 0.562487 13.3067 0.59943 13.3531 0.645993Z" fill="#212529"/>
  //  </svg></div>
  //  <div class="options2">
  //  <p class="length">(Total ${length})</p>
  //    <div class="optionApi op">
  //     <input type="radio" class="radioSelect" id="radioSelect" name="select">
  //     <label for="radioSelect" class="api">${id1.name}</label>
  //     <img class="apimg" src="${id1.image}"/>
  //    </div>
  //    <div class="optionApi op">
  //     <input type="radio" class="radioSelect" id="radioSelect2" name="select">
  //     <label for="radioSelect2" class="api">${id2.name}</label><img class="apimg" src="${id2.image}"/>
  //    </div>
  //    <div class="optionApi op">
  //     <input type="radio" class="radioSelect" id="radioSelect3" name="select">
  //     <label for="radioSelect3" class="api">${id3.name}</label><img class="apimg" src="${id3.image}"/>
  //    </div>
  //    <div class="optionApi op">
  //     <input type="radio" class="radioSelect" id="radioSelect4" name="select">
  //     <label for="radioSelect4" class="api">${id4.name}</label><img class="apimg" src="${id4.image}"/>
  //    </div>
  //    <div class="optionApi op">
  //     <input type="radio" class="radioSelect" id="radioSelect4" name="select">
  //     <label for="radioSelect4" class="api">other</label><img class="apimg" src="/images/default.png"/>
  //    </div>
  //  </div>`;
  const optCont = document.querySelector(".forArr2");
  const total = document.querySelector(".total");
  const opiate1 = document.querySelector(".op1");
  const opiate2 = document.querySelector(".op2");
  const opiate3 = document.querySelector(".op3");
  const opiate4 = document.querySelector(".op4");
  const opiate5 = document.querySelector(".op5");

  const htmlarr = `<p class="opt2 optionP">Choose your character <span>*</span></p><svg class="arrow arrow2" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3531 0.645993C13.3997 0.692439 13.4366 0.747614 13.4618 0.80836C13.487 0.869105 13.5 0.934226 13.5 0.999993C13.5 1.06576 13.487 1.13088 13.4618 1.19163C13.4366 1.25237 13.3997 1.30755 13.3531 1.35399L7.35311 7.35399C7.30666 7.40056 7.25148 7.4375 7.19074 7.46271C7.12999 7.48791 7.06487 7.50089 6.99911 7.50089C6.93334 7.50089 6.86822 7.48791 6.80747 7.46271C6.74673 7.4375 6.69155 7.40056 6.64511 7.35399L0.645106 1.35399C0.55122 1.26011 0.498475 1.13277 0.498475 0.999993C0.498475 0.867218 0.55122 0.73988 0.645106 0.645993C0.738993 0.552107 0.866331 0.499362 0.999106 0.499362C1.13188 0.499362 1.25922 0.552107 1.35311 0.645993L6.99911 6.29299L12.6451 0.645993C12.6916 0.59943 12.7467 0.562487 12.8075 0.537281C12.8682 0.512074 12.9333 0.4991 12.9991 0.4991C13.0649 0.4991 13.13 0.512074 13.1907 0.537281C13.2515 0.562487 13.3067 0.59943 13.3531 0.645993Z" fill="#212529"/>
   </svg>`;
  optCont.insertAdjacentHTML("beforeend", htmlarr);

  const html = `<p class="length">(Total ${length})</p>`;
  total.insertAdjacentHTML("beforeend", html);

  const html1 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id1.name}</label>
      <img class="apimg" src="${id1.image}"/>`;
  opiate1.insertAdjacentHTML("beforeend", html1);

  const html2 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id2.name}</label>
      <img class="apimg" src="${id2.image}"/>`;
  opiate2.insertAdjacentHTML("beforeend", html2);

  const html3 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id3.name}</label>
      <img class="apimg" src="${id3.image}"/>`;
  opiate3.insertAdjacentHTML("beforeend", html3);

  const html4 = `<input type="radio" class="radioSelect" id="radioSelect" name="select">
     <label for="radioSelect" class="api">${id4.name}</label>
      <img class="apimg" src="${id4.image}"/>`;
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
  optionOne.forEach((e) => {
    e.addEventListener("click", function () {
      sessionStorage.setItem("experience_level", e.innerText);
    });
  });
  optionApi.forEach((e) => {
    e.addEventListener("click", function () {
      sessionStorage.setItem("character_id", id(e));
    });
  });
  function id(e) {
    if (e.innerText.includes("Nona")) {
      return "1";
    } else if (e.innerText.includes("Bobby")) {
      return "3";
    } else if (e.innerText.includes("Tal")) {
      return "2";
    } else if (e.innerText.includes("Magnus")) {
      return "4";
    } else if (e.innerText.includes("other")) {
      return "5";
    }
  }
});
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
      n++;
      num2.classList.add("num2back");
      p1.innerHTML = sessionStorage.getItem("experience_level");
    }
    if (sessionStorage.getItem("character_id")) {
      n2++;
      num2.classList.add("num2back");
      forArr2.firstChild.innerHTML = char();
    }

    function char() {
      if (sessionStorage.getItem("character_id") == idi1.id) {
        let str = `<p>${idi1.name}</p><img class="apimg2" src="${idi3.image}"/>`;
        return str;
        // return idi1.name;
      }
      if (sessionStorage.getItem("character_id") == idi2.id) {
        //  return idi2.name;
        let str2 = `<p>${idi2.name}</p><img class="apimg2" src="${idi2.image}"/>`;
        return str2;
      }
      if (sessionStorage.getItem("character_id") == idi3.id) {
        // return idi3.name;
        let [namesur3, surname] = idi3.name.toLowerCase().split(" ");
        let str3 = `<p>${idi3.name}</p><img class="apimg2" src="${idi3.img}"/>`;
        return str3;
      }
      if (sessionStorage.getItem("character_id") == idi4.id) {
        // return idi4.name;
        let [namesur4, surname] = idi4.name.toLowerCase().split(" ");
        let str4 = `<p>${idi4.name}</p><img class="apimg2" src="${idi4.img}"/>`;
        return str4;
      }
      if (sessionStorage.getItem("character_id") == 5) {
        // return "other";
        let str5 = `<p>other</p><img class="apimg2" src="images/default.png"/>`;
        return str5;
      }
    }
    let yesNo = sessionStorage.getItem("already_participated");
    if (yesNo == true) {
      act1.classList.add("activated");
    } else if (yesNo == false) {
      act2.classList.add("activated");
    }
  });
};
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

  radiol.forEach((r) => {
    r.addEventListener("click", (e) => {
      if (r.parentElement.classList.contains("radio2")) {
        sessionStorage.setItem("already_participated", `${false}`);
        r.parentElement.previousElementSibling
          .querySelector("input")
          .classList.remove("activated");
        r.nextElementSibling.classList.add("activated");
      } else if (r.parentElement.classList.contains("radio1")) {
        sessionStorage.setItem("already_participated", `${true}`);
        r.parentElement.nextElementSibling
          .querySelector("input")
          .classList.remove("activated");
        r.nextElementSibling.classList.add("activated");
      }
    });
  });
  // optn.addEventListener("click", () => {
  //   optn.parentElement.previousElementSibling.classList.remove("bordered");
  // });
});
let r = 0;
let v = 0;
function validation() {
  if (!n2 > 0) {
    forArr.classList.add("bordered");
    v++;
  }
  if (!n > 0) {
    forArr2.classList.add("bordered");
    v++;
  }
  if (!sessionStorage.getItem("already_participated")) {
    radioP.classList.add("redio");
    v++;
  }
  allOpts.forEach((ev) => {
    ev.addEventListener("click", () => {
      ev.parentElement.previousElementSibling.classList.remove("bordered");
    });
  });
  radiol.forEach((rad) => {
    rad.addEventListener("click", () => {
      radioP.classList.remove("redio");
      r++;
    });
    rad.addEventListener("change", () => {
      radioP.classList.remove("redio");
      r++;
    });
  });
  if (
    !forArr.classList.contains("bordered") &&
    !forArr2.classList.contains("bordered") &&
    !radioP.classList.contains("redio")
  ) {
    form.submit();
    xlmReq();
    return true;
  }
}
form.addEventListener("submit", (e) => {
  if (validation()) {
    validation();
  } else {
    e.preventDefault();
  }
});

function xlmReq() {
  let storage = {};
  Object.keys(sessionStorage).forEach((key) => {
    storage[key] = sessionStorage.getItem(key);
  });
  storage["already_participated"] = Boolean(
    sessionStorage.getItem("already_participated")
  );
  let data = JSON.stringify(storage);

  let xlm = new XMLHttpRequest();
  let url = "https://chess-tournament-api.devtest.ge/api/register";
  xlm.open("POST", url, true);

  //Send the proper header information along with the request
  xlm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xlm.onreadystatechange = function () {
    if (xlm.readyState == 4 && xlm.status == 200) {
      alert(http.responseText);
    }
  };
  xlm.send(data);
  console.log(data);
}

// function post() {
//   submit.addEventListener("click", () => {
//     const Name = sessionStorage.getItem("name");
//     const email = sessionStorage.getItem("email");
//     const phone = sessionStorage.getItem("phone");
//     const date = sessionStorage.getItem("date_of_birth");
//     const experience = sessionStorage.getItem("experience_level");
//     const participation = Boolean(
//       sessionStorage.getItem("already_participated")
//     );
//     const id = Number(sessionStorage.getItem("character_id"));

//     if (window) {
//       let storage = {};
//       Object.keys(sessionStorage).forEach((key) => {
//         storage[key] = sessionStorage.getItem(key);
//       });
//       let data = JSON.stringify(storage);

//       fetch("https://chess-tournament-api.devtest.ge/api/register", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "Content-type": "application/json; charset=UTF-8" },
//       })
//         .then((response) => response.json())
//         .then((json) => console.log(json))
//         .catch((err) => console.log(err));
//     }
//   });
//   form.submit();
// }
// window.onload = function () {
//   if (sessionStorage.getItem("experience_level")) {
//     p1.innerHTML = sessionStorage.getItem("experience_level");
//   }
//   if (sessionStorage.getItem("character_id")) {
//     p2.innerHTML = sessionStorage.getItem("character_id");
//   }
// };
// optionOne.forEach((e) => {
//   e.addEventListener("click", function () {
//     sessionStorage.setItem("experience_level", e.innerText);
//   });
// });
// optionApi.forEach((e) => {
//   e.addEventListener("click", function () {
//     sessionStorage.setItem("character_id", id(e));
//   });
// });
// function char(el) {
//   if (sessionStorage.getItem("character_id") == 1) {
//     return "Nona ";
//   }
// }
// function id(e) {
//   if (e.innerText.includes("Nona")) {
//     return "1";
//   } else if (e.innerText.includes("Bobby")) {
//     return "2";
//   } else if (e.innerText.includes("Tal")) {
//     return "2";
//   } else if (e.innerText.includes("Magnus")) {
//     return "4";
//   } else {
//     return "5";
//   }
// }
// optionApi.forEach((e) => {
//   e.addEventListener("click", function () {
//     sessionStorage.setItem("character_id", e.getAttribute('value'));

//   });
// });
// console.log(p2.getAttribute("value"));
// radiola.addEventListener("change", function () {
//   sessionStorage.setItem("already_partipicated", emailValid.value);
//   lab2.textContent = "";
// });

// players.addEventListener("click", () => {
//   players.classList.toggle("active");
// });
// opt1.addEventListener("click", () => {
//   opt1.classList.toggle("active");
//   opts1.classList.toggle("active");
//   if (opt2.classList.contains("active")) {
//     arr2.classList.remove("active");
//   }
//   opts2.classList.remove("active");
// });
// opt2.addEventListener("click", () => {
//   opt2.classList.toggle("active");
//   opts2.classList.toggle("active");
//   if (opt1.classList.contains("active")) {
//     arr1.classList.remove("active");
//   }
//   opts1.classList.remove("active");
// });

// opts1.addEventListener("click", () => {
//   num2.classList.add("num2back");
//   opts1.classList.remove("active");
//   arr1.classList.remove("active");
// });

// opts2.addEventListener("click", () => {
//   opts2.classList.remove("active");
//   num2.classList.add("num2back");
//   arr2.classList.remove("active");
