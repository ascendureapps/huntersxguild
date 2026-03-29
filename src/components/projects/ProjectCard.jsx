const ProjectCard = ({ project, index, isInView }) => {
  return (
    <div 
      className={`project-card ${isInView ? 'project-card-fade-in' : 'project-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        <span className="tech-label">Tech Stack:</span>
        <span>{project.tech}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
