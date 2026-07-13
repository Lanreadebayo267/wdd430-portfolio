import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "StyleJenich Fashion",
    description:
      "A responsive fashion website showcasing stylish clothing and accessories.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/practice-codes",
  },
  {
    title: "CSE Motors",
    description:
      "A JavaScript project for a car dealership website with interactive features.",
    technologies: ["Node.js", "JavaScript", "CSS"],
    link: "https://github.com/Lanreadebayo267/cse340-projects",
  },
  {
    title: "SleepOutside",
    description:
      "A camping gear website with a focus on outdoor adventures.",
    technologies: ["HTML", "JavaScript", "CSS"],
    link: "https://github.com/Lanreadebayo267/wdd330-sleepoutside",
  },
  {
    title: "NaijaExplorer",
    description:
      "A travel website highlighting popular destinations in Nigeria.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/wdd131",
  },
  {
    title: "Lagos Chamber of Commerce",
    description:
      "A website for the Lagos Chamber of Commerce, providing information and resources for businesses.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/wdd231",
  },
  {
    title: "White Water Rafting",
    description:
      "A website for a white water rafting company, showcasing their services and adventures.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/wdd130",
  },
  {
    title: "BookVerse API",
    description:
      "A RESTful API for managing a collection of books, built with Node.js and Express.",
    technologies: ["Node.js", "Express", "MongoDB"],
    link: "https://github.com/ericayanru-dev/bookverse-api",
  },
];

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg text-gray-700">
          Hi, I am <strong>Lanre Adebayo</strong>, a software developer passionate about
          building modern web applications with React, Next.js, TypeScript, and
          JavaScript.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}