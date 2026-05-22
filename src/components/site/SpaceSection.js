import SpaceShowcase from "@/components/ui/SpaceShowcase";
import { assetPath } from "@/lib/paths";

export default function SpaceSection({ content }) {
  const showcaseItems = [
    {
      title: content.space.stats[0],
      src: assetPath("/images/store/creative-playroom-blocks.jpg"),
    },
    {
      title: content.space.stats[1],
      src: assetPath("/images/store/classroom-library-shelf.jpg"),
    },
    {
      title: content.space.stats[2],
      src: assetPath("/images/store/child-classroom-smile.png"),
    },
  ];

  return (
    <section id="section-2" className="section section--cream space-section">
      <div className="section-shell space-section__top">
        <div className="space-panel motion-reveal">
          <p className="eyebrow eyebrow--blue">{content.space.eyebrow}</p>
          <h2>{content.space.title}</h2>
          <p>{content.space.text}</p>
        </div>
        <SpaceShowcase items={showcaseItems} />
      </div>
    </section>
  );
}
