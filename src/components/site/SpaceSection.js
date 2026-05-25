import SpaceShowcase from "@/components/ui/SpaceShowcase";
import { assetPath } from "@/lib/paths";

export default function SpaceSection({ content }) {
  const showcaseItems = Array.from({ length: 8 }, (_, index) => ({
    title: `${content.space.gallery.imageLabel} ${index + 1}`,
    src: assetPath(`/images/space/prostor-${index + 1}.${index === 5 || index === 7 ? "jpg" : "png"}`),
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
