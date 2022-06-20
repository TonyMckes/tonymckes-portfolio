import project from "./project-elements.js";
import { skills } from "./skills-list.js";
const API_URL = `http://127.0.0.1:3001/api`;

// Header
const header = document.querySelector(".header");
const sidebar = document.querySelector(".header__sidebar");
const sidebarButton = document.querySelector(".header__button");
let lastScrollY = window.pageYOffset;

sidebarButton.addEventListener("click", (e) => {
  sidebar.classList.toggle("header__sidebar--open");
});

document.addEventListener("scroll", (e) => {
  if (lastScrollY < window.pageYOffset && lastScrollY > 150) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }

  if (lastScrollY > 25) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }

  lastScrollY = window.pageYOffset;
});

(async () => {
  // Projects
  const projectsList = document.querySelector(".projects__list");

  try {
    const response = await fetch(API_URL);
    const pinnedRepositories = await response.json();

    if (pinnedRepositories.length > 0) {
      projectsList.innerHTML = pinnedRepositories.map(project).join("");
    }
  } catch (error) {
    console.log(error);
  }
})();

// Skills
const skillsList = document.querySelector(".skills__list");

skills.forEach(([title, skillName]) => {
  const skillItem = document.createElement("li");
  const logoFg = document.createElement("img");
  const logoBg = document.createElement("img");
  const skillTitle = document.createElement("span");

  skillItem.className = "skill__item";
  logoFg.src = `./images/Logos${skillName}.svg`;
  logoFg.alt = title;
  logoFg.className = "skill__logo";
  logoBg.src = `./images/Logos${skillName}.svg`;
  logoBg.alt = title;
  logoBg.className = "skill__logo--blured";
  skillTitle.textContent = title;
  skillTitle.className = "skill__title";

  skillItem.append(logoFg, logoBg, skillTitle);

  skillsList.appendChild(skillItem);
});
