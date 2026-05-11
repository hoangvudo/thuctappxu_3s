function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card h-100 p-4">
      <div className="feature-icon mb-3">{icon}</div>
      <h3 className="h5 mb-2">{title}</h3>
      <p className="section-copy mb-0">{description}</p>
    </div>
  )
}

export default FeatureCard