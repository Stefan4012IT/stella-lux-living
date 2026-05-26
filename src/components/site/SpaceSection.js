import SpaceShowcase from "@/components/ui/SpaceShowcase";
import { assetPath } from "@/lib/paths";

export default function SpaceSection({ content }) {
  const galleryFiles = [
    "prostor-0.png",
    "prostor-1.png",
    "prostor-2.png",
    "prostor-3.png",
    "prostor-4.png",
    "prostor-5.png",
    "prostor-6.png",
    "prostor-7.png",
    "prostor-8.jpg",
    "prostor-9.png",
    "prostor-10.png",
    "prostor-11.png",
    "prostor-12.png",
  ];
  const showcaseItems = galleryFiles.map((filename, index) => ({
    title: `${content.space.gallery.imageLabel} ${index + 1}`,
    src: assetPath(`/images/space/${filename}`),
  }));

  return (
    <section id="section-2" className="section section--cream space-section">
      <div className="section-shell space-section__top">
        <div className="space-panel motion-reveal">
          <p className="eyebrow eyebrow--blue">{content.space.eyebrow}</p>
          <h3>{content.space.title}</h3>
          <p>{content.space.text}</p>
          <h4>{content.space.detailTitle}</h4>
          <p>{content.space.detailText}</p>
        </div>
        <SpaceShowcase features={content.space.features} items={showcaseItems} labels={content.space.gallery} />
      </div>
    </section>
  );
}
