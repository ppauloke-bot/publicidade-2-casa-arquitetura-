import Header from "./components/Header";
import ScrollVideoSection from "./components/ScrollVideoSection";
import IntroStatement from "./components/IntroStatement";
import StatsBar from "./components/StatsBar";
import ProcessSteps from "./components/ProcessSteps";
import Gallery from "./components/Gallery";
import ParallaxPhotoSection from "./components/ParallaxPhotoSection";
import ServiceCards from "./components/ServiceCards";
import Reviews from "./components/Reviews";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="bg-[#f4efe7]">
      <Header />

      {/* Hero — construction scrub with a persistent headline. */}
      <ScrollVideoSection
        videoSrc="/construction.mp4"
        containerHeightVh={400}
        heroEyebrow="Solmar · Custom pools"
        heroHeading="Scroll to build your backyard."
        chapters={[
          {
            startProgress: 0.05,
            endProgress: 0.35,
            number: "01",
            label: "THE SITE",
            caption:
              "A well-placed pool doesn't just sit in a backyard. It bends sightlines, and organizes the entire home around it.",
          },
          {
            startProgress: 0.4,
            endProgress: 0.7,
            number: "02",
            label: "THE STRUCTURE",
            caption:
              "Infinity pools are an illusion — engineered so water seems to dissolve into the horizon.",
          },
          {
            startProgress: 0.75,
            endProgress: 1.0,
            number: "03",
            label: "THE FINISH",
            caption:
              "Even silence is designed. A still pool calms a space. Falling water masks the world beyond it.",
          },
        ]}
      />

      <IntroStatement />

      <StatsBar />

      <ProcessSteps />

      <Gallery />

      {/* Curtain reveal: the golden-hour photo is pinned as the gallery lifts
          away; the Services panel then scrolls up over it. */}
      <ParallaxPhotoSection
        imageUrl="/parallax.jpg"
        eyebrow="Outdoor living"
        heading="More than a pool. A place to gather."
        body="Pools are just the start. We design the whole backyard — kitchens, fire, shade, and lighting that turns golden hour into your favorite hour."
      >
        <ServiceCards />
      </ParallaxPhotoSection>

      <Reviews />

      {/* Second cinematic break — the finished tour. */}
      <ScrollVideoSection
        videoSrc="/tour.mp4"
        containerHeightVh={350}
        chapters={[
          {
            startProgress: 0.05,
            endProgress: 0.45,
            number: "04",
            label: "THE INTERIOR",
            caption:
              "Warm stone and timber, chosen so a house feels lived-in on the day it's finished.",
          },
          {
            startProgress: 0.55,
            endProgress: 1.0,
            number: "05",
            label: "THE REVEAL",
            caption: "Every space built inward eventually opens back out.",
          },
        ]}
      />

      <ContactCTA />

      <Footer />
    </main>
  );
}
