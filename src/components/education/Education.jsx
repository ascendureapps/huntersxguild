import EducationCard from './EducationCard';
import '../../styles/Education.css';
import useInView from '../../hooks/useInView';

const Education = ({ education }) => {
  const { targetRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="education" className="portfolio-section education-section" ref={targetRef}>
      <div className="section-content">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {education.map((item, index) => (
            <EducationCard key={index} education={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

