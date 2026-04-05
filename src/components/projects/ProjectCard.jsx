function normalizeProjectUrl(link) {
  const t = link?.trim();
  if (!t) return '';
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

const ProjectCard = ({
  project,
  isInView,
  forceFadeOut,
  animationDelaySec,
  onFadeInComplete,
}) => {
  const revealed = !forceFadeOut && isInView;
  const fadeOut = !revealed;
  const projectUrl = normalizeProjectUrl(project.link);

  const handleAnimationEnd = (e) => {
    if (!onFadeInComplete) return;
    const name = e.animationName || '';
    if (!name.includes('cardFadeIn')) return;
    onFadeInComplete();
  };

  return (
    <div
      className={[
        'project-card',
        projectUrl ? 'project-card--has-link' : '',
        revealed ? 'project-card-fade-in' : 'project-card-fade-out',
        fadeOut && forceFadeOut ? 'project-card-fade-out--stagger' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ animationDelay: `${animationDelaySec}s` }}
      onAnimationEnd={handleAnimationEnd}
    >
      {projectUrl ? (
        <a
          href={projectUrl}
          className="project-card-view-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          title="View"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="project-card-view-icon" aria-hidden>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </span>
        </a>
      ) : null}
      <h3>{project.title}</h3>
      {project.owner ? <p className="project-owner">{project.owner}</p> : null}
      <p className="project-description">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
