//déclaration du dom

let container = document.getElementById("container");
let btnStart = document.getElementById("btn_start");
let btnReset = document.getElementById("btn_reset");
let btnTest = document.getElementById("btn_test");
let navbarMenu = document.querySelector("#navbarBasicExample");
let navbarBurger = document.querySelector(".navbar-burger");

//déclaration des states
let active = false;
let navbar = false;
const posTop = window.innerHeight;
const posLeft = window.innerWidth;

let count = 0;
//functions

let state = () => {
  if (active) {
    active = false;
    btnStart.textContent = "Pause";
  } else {
    active = true;
    btnStart.textContent = "Start";
    return;
  }
};

let navbarState = () => {
  navbarMenu.classList.toggle("is-active");
  navbarBurger.classList.toggle("is-active");
};

let generation = () => {
  setInterval(creation, 110);
};
let creation = () => {
  if (active && count < 200) {
    var left = ((Math.random() * posLeft) / posLeft) * 100;
    var top = ((Math.random() * posTop) / posTop) * 100;
    console.log("top : ", top, " left : ", left);
    var img = document.createElement("img");
    img.setAttribute("src", "./img/meryl_face.png");
    container.appendChild(img);
    img.classList.add("rotating");
    img.style.top = top + "%";
    img.style.left = left + "%";
    count++;
  }
};

//
btnStart.addEventListener("click", () => {
  state();
  generation();
  navbarState();
});

btnReset.addEventListener("click", () => {
  console.log("reset");
  container.innerHTML = "";
  state();
  navbarState();
});
navbarBurger.addEventListener("click", () => {
  navbarState();
});
