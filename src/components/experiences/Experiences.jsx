import ExperienceCard from './ExperienceCard';
import '../../styles/Experiences.css';
import useInView from '../../hooks/useInView';

const Experiences = ({ experiences }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="experiences" className="portfolio-section experiences-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Work Experience</h2>
        <div className="experiences-list">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
