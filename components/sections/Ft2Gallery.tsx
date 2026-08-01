import { SectionHeading } from "@/components/SectionHeading";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Reveal } from "@/components/Reveal";

// Gallery images — swap these for your own site-visit / drone photos anytime
// (original media is an E-E-A-T and image-search advantage over competitors).
const images = [
  "/images/projects/faisal-town-phase-2.webp",
  "/images/gallery/aerial-community.png",
  "/images/gallery/sector-entrance.webp",
];

export function Ft2Gallery() {
  return (
    <section id="gallery" className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Gallery"
          title="A Look at Faisal Town Phase 2"
          subtitle="The community, landmarks and on-ground development. Tap any image to enlarge."
        />
        <Reveal className="mt-12">
          <ProjectGallery images={images} name="Faisal Town Phase 2" />
        </Reveal>
      </div>
    </section>
  );
}
