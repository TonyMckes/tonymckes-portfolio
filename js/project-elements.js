function project({ description, homepageUrl, repositoryTopics, name, url }) {
  const techListItem = ({ topic: { name } }) => {
    return `<li class="project__tech-list-item">${name}</li>`;
  };

  const title = name.replace(/-/g, " ");

  return `
  <li class="projects__item project">
      <h3 class="project__title title">${title}</h3>
      <video class="project__media" loop muted>
        <source src="images/bg/${name}.webm" type="video/webm">
        Your browser does not support the videos.
      </video>
      <div class="project__description">
        <p>
        ${description || "No description available."}
        </p>
      </div>
      <ul class="project__tech-list">
        ${repositoryTopics.nodes.map(techListItem).join("")}
      </ul>
      <div class="project__links">
        <a class="project__link--source-code" href="${url}">Code base</a>
        <a class="project__link--website" href="${homepageUrl}">Website</a>
      </div>
  </li>`;
}

export default project;
