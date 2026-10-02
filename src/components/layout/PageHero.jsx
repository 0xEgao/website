export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="portal-hero">
      <div className="portal-hero__signal" aria-hidden="true" />
      <p className="section-label mb-4">// {eyebrow}</p>
      <div className="portal-hero__grid">
        <h1 className="portal-hero__title font-display font-semibold text-cream">{title}</h1>
        <div>
          <p className="portal-hero__description text-cream/70">{description}</p>
          {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  )
}
