import ScrollVideoSection from "./components/ScrollVideoSection";
import ClosingSection from "./components/ClosingSection";

export default function Home() {
  return (
    <main className="bg-[#0a0a0b]">
      <ScrollVideoSection
        videoSrc="/construction.mp4"
        containerHeightVh={400}
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

      <ClosingSection />
    </main>
  );
}
