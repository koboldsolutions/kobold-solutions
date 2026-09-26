export default function PageHeader({ eyebrow, title, accent, description }) {
  return (
    <header className="ks-page-header">
      <div className="container ks-page-header__grid">
        <div>
          <p className="ks-label">{eyebrow}</p>
          <h1 className="ks-title">{title}<span className="ks-accent">{accent}</span></h1>
        </div>
        <p className="ks-copy">{description}</p>
      </div>
    </header>
  );
}
