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
  // Projects carousel
  const btnLeft = document.querySelector(".carousel__btn--left");
  const carouselSlider = document.querySelector(".carousel__slider");
  const btnRight = document.querySelector(".carousel__btn--right");

  try {
    const response = await fetch(API_URL);
    const pinnedRepositories = await response.json();

    if (pinnedRepositories.length > 0) {
      carouselSlider.innerHTML = pinnedRepositories.map(project).join("");

      btnRight.addEventListener("click", (e) => {
        e.preventDefault();

        const firstElement = carouselSlider.children[0];

        const { width } = carouselSlider.children[0].getBoundingClientRect();
        carouselSlider.style.transition = `300ms ease-out all`;
        carouselSlider.style.transform = `translateX(-${width}px)`;

        const transition = () => {
          carouselSlider.style.transition = "none";
          carouselSlider.style.transform = `translateX(0)`;
          carouselSlider.appendChild(firstElement);

          carouselSlider.removeEventListener("transitionend", transition);
        };

        carouselSlider.addEventListener("transitionend", transition);
      });

      btnLeft.addEventListener("click", (e) => {
        e.preventDefault();
        const { width } = carouselSlider.children[0].getBoundingClientRect();

        const lastElement = carouselSlider.lastChild;

        carouselSlider.insertBefore(lastElement, carouselSlider.children[0]);
        carouselSlider.style.transition = "none";
        carouselSlider.style.transform = `translateX(-${width}px)`;

        setTimeout(() => {
          carouselSlider.style.transition = `300ms ease-out all`;
          carouselSlider.style.transform = `translateX(0)`;
        }, 0);
      });
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
