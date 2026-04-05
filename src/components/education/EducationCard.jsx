const EducationCard = ({ education, index, isInView }) => {
  return (
    <div
      className={`education-card ${isInView ? 'education-card-fade-in' : 'education-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      <h3>{education.school}</h3>
      <p className="education-degree">{education.degree}</p>
      <span className="education-period">{education.period}</span>
      {education.location ? (
        <span className="education-location">{education.location}</span>
      ) : null}
    </div>
  );
};

export default EducationCard;
