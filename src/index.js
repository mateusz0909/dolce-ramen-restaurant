import "./style.css";
import "./hamburgers.css";
import hamburger from "./components/hamburger";
import navBar from "./components/navbar";
import header from "./components/header";
import menu from "./components/menu";
import about from "./components/about";
import locations from "./components/locations";
import navbar from "./components/navbar";

const app = document.getElementById("content");
const textContent = document.createElement("div");
textContent.classList.add("text-content");

app.appendChild(navBar);
app.appendChild(hamburger);
app.appendChild(textContent);
textContent.appendChild(header);

const handleMenuClick = (e) => {
  textContent.innerHTML = "";
  textContent.appendChild(menu);
};

const handleAboutClick = (e) => {
  textContent.innerHTML = "";
  textContent.appendChild(about);
};

const handleLocationsClick = (e) => {
  textContent.innerHTML = "";
  textContent.appendChild(locations);
};

const handleOrderClick = (e) => {
  window.open("https://glovoapp.com/pl/en/warsaw/wiatrak-kebab-waw", "_blank");
};

const handleHamburgerClick = (e) => {
  hamburgerBtn.classList.toggle("is-active");
  navbar.classList.toggle("is-active");
};

const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");
const locationsBtn = document.querySelector(".locations-btn");
const orderBtn = document.querySelector(".order-btn");
const hamburgerBtn = document.querySelector(".hamburger");

menuBtn.addEventListener("click", handleMenuClick);
aboutBtn.addEventListener("click", handleAboutClick);
locationsBtn.addEventListener("click", handleLocationsClick);
orderBtn.addEventListener("click", handleOrderClick);
hamburgerBtn.addEventListener("click", handleHamburgerClick);
