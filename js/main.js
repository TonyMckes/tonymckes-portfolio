import project from "./project-elements.js";
import { skills } from "./skills-list.js";
const API_URL = `http://127.0.0.1:3001/api`;

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

  // Skills
  const skillsList = document.querySelector(".skills__list");

  skills.forEach(([title, skillName]) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const h4 = document.createElement("h4");

    li.className = "skill__item";
    img.src = `./images/Logos${skillName}.svg`;
    img.alt = title;
    img.className = "skill__logo";
    h4.textContent = title;
    h4.className = "skill__title";

    li.append(img, h4);

    skillsList.appendChild(li);
  });
})();
