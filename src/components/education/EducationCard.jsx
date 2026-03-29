const EducationCard = ({ education, index, isInView }) => {
  return (
    <div
      className={`education-card ${isInView ? 'education-card-fade-in' : 'education-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3>{education.school}</h3>
      <p className="education-degree">{education.degree}</p>
      <div className="education-details">
        <span className="education-period">{education.period}</span>
        <span className="education-location">{education.location}</span>
      </div>
    </div>
  );
};

export default EducationCard;

