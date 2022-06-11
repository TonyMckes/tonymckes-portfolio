function project({ description, homepageUrl, repositoryTopics, name, url }) {
  const techListItem = ({ topic: { name } }) => {
    return `<li class="project__tech-list-item">${name}</li>`;
  };

  return `
  <li class="carousel__item project">
    <div class="project__content">
      <h3 class="project__title">${name}</h3>
      <p class="project__description">
        ${description}
      </p>
      <ul class="project__tech-list">
        ${repositoryTopics.nodes.map(techListItem).join("")}
      </ul>
      <div class="project__links">
        <a href="${url}">Code base</a>
        <a href="${homepageUrl}">Website</a>
      </div>
    </div>
    <div class="project__image">
      <img src="" alt="" />
    </div>
  </li>`;
}

export default project;
