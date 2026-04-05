function normalizeCertificateUrl(link) {
  const t = link?.trim();
  if (!t) return '';
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

const CertificateCard = ({ certificate, index, isInView }) => {
  const certificateUrl = normalizeCertificateUrl(certificate.link);

  return (
    <div
      className={[
        'certificate-card',
        certificateUrl ? 'certificate-card--has-link' : '',
        isInView ? 'certificate-card-fade-in' : 'certificate-card-fade-out',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ animationDelay: `${index * 0.3}s` }}
    >
      {certificateUrl ? (
        <a
          href={certificateUrl}
          className="certificate-card-view-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${certificate.name}`}
          title="View"
          onClick={(e) => e.stopPropagation()}
        >
          <span className="certificate-card-view-icon" aria-hidden>
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
      <h3>{certificate.name}</h3>
      <p className="certificate-issuer">{certificate.issuer}</p>
      <span className="certificate-date">{certificate.date}</span>
      {certificate.credential ? (
        <span className="certificate-credential">{certificate.credential}</span>
      ) : null}
    </div>
  );
};

export default CertificateCard;
