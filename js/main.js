import project from "./project-elements.js";
import { skills } from "./skills-list.js";

// Shorthands
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


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
    if (sidebar.classList.contains("header__sidebar--open")) return;
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

      const projectMedia = document.querySelectorAll(".project__media");

      projectMedia.forEach((video) => {
        video.children[0].onerror = () => (video.style.display = "none");

        const callback = (entries) => {
          if (!video.duration) return;

          entries.forEach(({ isIntersecting }) => {
            isIntersecting ? video.play() : video.pause();
          });
        };

        const observer = new IntersectionObserver(callback, { threshold: 1 });

        observer.observe(video);
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

// Contact
const at = $(".contact__at");
const emailDomain = $(".contact__email-domain");

if (isMobile) {
  $$(".contact__link").forEach((node) => {
    node.target = "_self";
  });
}

$$(".contact__link--at-username").forEach((node) => {
  node.addEventListener("mouseover", (e) => {
    emailDomain.classList.add("contact__email-domain--invisible");
    at.classList.add("contact__at--visible");
  });
  node.addEventListener("mouseout", (e) => {
    emailDomain.classList.remove("contact__email-domain--invisible");
    at.classList.remove("contact__at--visible");
  });
});

$$(".contact__link--username").forEach((node) => {
  node.addEventListener("mouseover", (e) => {
    emailDomain.classList.add("contact__email-domain--invisible");
  });
  node.addEventListener("mouseout", (e) => {
    emailDomain.classList.remove("contact__email-domain--invisible");
  });
});

// Footer
