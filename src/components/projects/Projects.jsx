import ProjectCard from './ProjectCard';
import '../../styles/Projects.css';
import useInView from '../../hooks/useInView';

const Projects = ({ projects }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="projects" className="portfolio-section projects-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
