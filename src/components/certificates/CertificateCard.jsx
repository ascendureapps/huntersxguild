const CertificateCard = ({ certificate, index, isInView }) => {
  return (
    <div 
      className={`certificate-card ${isInView ? 'certificate-card-fade-in' : 'certificate-card-fade-out'}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h3>{certificate.name}</h3>
      <p className="certificate-issuer">{certificate.issuer}</p>
      <div className="certificate-details">
        <span className="certificate-date">{certificate.date}</span>
        <span className="certificate-credential">{certificate.credential}</span>
      </div>
    </div>
  );
};

export default CertificateCard;
