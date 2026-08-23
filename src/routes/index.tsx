import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/portfolio/Hero";
import { Stats, About, WhyStarted, Purpose } from "@/components/portfolio/Story";
import { Services, Journey } from "@/components/portfolio/Services";
import { Gallery } from "@/components/portfolio/Gallery";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer, MobileActionBar } from "@/components/portfolio/Footer";
import { heroPhoto } from "@/data/gallery";

const title = "Vishnu Vardhan Reddy — Kangen Water Distributor, Hyderabad";
const description =
  "Digital card and portfolio of Vishnu Vardhan Reddy, Enagic Independent Distributor in Hyderabad. Kangen Water demonstrations, device guidance, installation support and business opportunity.";
const ogImage = new URL(heroPhoto, "https://id-preview--81291183-3111-4d83-aee0-c7aca99aa050.lovable.app").href;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vishnu Vardhan Reddy",
  jobTitle: "Enagic Independent Distributor",
  telephone: "+91-9885750369",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vishnupuri Colony, Medipally",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  worksFor: { "@type": "Organization", name: "Enagic — Kangen Water" },
};

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Stats />
      <main>
        <About />
        <WhyStarted />
        <Purpose />
        <Services />
        <Journey />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
