function project({ description, homepageUrl, repositoryTopics, name, url }) {
  const techListItem = ({ topic: { name } }) => {
    return `<li class="project__tech-list-item">${name}</li>`;
  };

  const title = name.replace(/-/g, " ");

  return `
  <li class="carousel__item project">
    <div class="project__content">
      <h3 class="project__title title">${title}</h3>
      <div class="project__description">
        <p>
        ${description}
        </p>
      </div>
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
