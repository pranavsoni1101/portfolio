import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Projects() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          🚀 From Concept to Launch
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-xl">
          I build things from scratch. Here's the proof😤
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
export const projects = [
  {
    title: "Zygoma AI",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://zygomaai.com",
  },
  {
    title: "Focus Flow",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "#oops",
  },
];
