function SectionHeader({ eyebrow, title, description, align = 'start' }) {
  return (
    <div className={`text-${align} mb-4 mb-lg-5`}>
      {eyebrow ? <div className="eyebrow mb-3">{eyebrow}</div> : null}
      <h2 className="section-title mb-3">{title}</h2>
      {description ? <p className="section-copy lead mb-0">{description}</p> : null}
    </div>
  )
}

export default SectionHeader