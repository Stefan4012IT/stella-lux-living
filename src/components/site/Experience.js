export default function Experience({ content }) {
  const pillarImages = [
    "/images/store/children-playroom-group.jpg",
    "/images/store/learning-shelf-books.jpg",
    "/images/store/toys-and-books-detail.jpg",
    "/images/store/children-classroom-portrait.png",
    "/images/store/creative-playroom-blocks.jpg",
    "/images/store/classroom-library-shelf.jpg",
  ];

  return (
    <section id="section-1" className="section section--white experience">
      <div className="section-shell">
        <div className="section-heading section-heading--split">
          <h2>{content.pillarsTitle}</h2>
          <p>{content.hero.text}</p>
        </div>
        <div className="pillar-grid">
          {content.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="pillar-card motion-reveal"
              style={{ "--pillar-image": `url(${pillarImages[index % pillarImages.length]})` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
