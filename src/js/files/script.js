// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Fancybox.show([{ src: "#review", type: "inline" }]);

// фунция появление меню при скролле вверх
let currentScroll;
let allScroll;
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let wrapper = document.querySelector(".page");

if (window.innerWidth > 1024.1) {
  window.addEventListener("scroll", (e) => {
    allScroll = currentScroll + document.body.clientHeight;
    if (window.pageYOffset > currentScroll) {
      nav.setAttribute("data-show-scroll", false);
      header.setAttribute("data-show-scroll", false);
      wrapper.setAttribute("data-show-scroll", false);
    } else if (document.body.scrollHeight - allScroll < 10) {
      nav.setAttribute("data-show-scroll", false);
      header.setAttribute("data-show-scroll", false);
      wrapper.setAttribute("data-show-scroll", false);
    } else {
      nav.setAttribute("data-show-scroll", true);
      header.setAttribute("data-show-scroll", true);
      wrapper.setAttribute("data-show-scroll", true);
    }
    currentScroll = window.pageYOffset;
  });
}

// price

let priceItem = document.querySelectorAll(".price__item--wrap");
if (priceItem) {
  priceItem.forEach((elem) => {
    elem.addEventListener(
      "click",
      (event) => {
        elem.classList.toggle("_active");
      },
      false
    );
  });
}

// add file to form

let file = document.querySelectorAll("[type='file']");

if (file) {
  file.forEach((elem) => {
    elem.addEventListener("change", (e) => {
      elem.nextElementSibling.querySelector(".my-current-file").innerHTML =
        e.target.files[0].name;
    });
  });
}

// current numbers animation

let numbers = document.querySelectorAll(".indicator__current");

if (numbers) {
  numbers.forEach((num) => {
    let valueNam = +num.innerHTML.replace(/[^\d]/g, "");
    num.innerHTML = 0;
    let partNumber = valueNam / 40;
    let cun = 0;
    function interval() {
      cun = cun + partNumber;
      num.innerHTML = cun.toFixed();
    }
    function stopInterval() {
      clearInterval(interval);
      num.innerHTML = valueNam;
    }

    let count = setInterval(interval, 100);

    setTimeout(() => {
      clearInterval(count);
      num.innerHTML = valueNam;
    }, 4000);
  });
}

// function splice lang on mobile

let lang = document.querySelector(".language__select");
let placeToIncluding = document.querySelector(".mobile__lang");

if (window.innerWidth < 1024) {
  lang.remove();
  placeToIncluding.appendChild(lang);
}


document.addEventListener("formSent", function (e) {
	Fancybox.show([{ src: "#success-answer", type: "inline" }])
});