import project from "./project-elements.js";
const API_URL = `http://127.0.0.1:3001/api`;

(async () => {
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
