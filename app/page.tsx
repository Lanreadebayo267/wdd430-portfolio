import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Lagos Chamber of Commerce",
    description:
      "A responsive chamber of commerce website designed to provide business information, member listings, and local community resources.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/wdd231",
  },
  {
    title: "Movies Library API",
    description:
      "A REST API for managing a movie library, including backend routes, database integration, validation, and API documentation.",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
    link: "https://github.com/Lanreadebayo267/movies-library-api",
  },
  {
    title: "SleepOutside",
    description:
      "A responsive web application that allows users to find and book outdoor sleeping experiences, with features like search, booking, and user reviews.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://github.com/Lanreadebayo267/wdd330-sleepoutside",
  },
  {
    title: "CSE Motors",
    description:
      "A responsive car dealership website that allows users to browse and search for vehicles, view detailed information, and contact the dealership.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/cse340",
  },
  {
    title: "Study Buddy Flutter App",
    description:
      "A mobile application that helps students find study partners based on their courses and availability, with features like chat and scheduling.",
    technologies: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/Lanreadebayo267/study-buddy-flutter",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="py-12 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-slate-500">
          Software Developer
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Hi, I&apos;m Lanre Adebayo
        </h1>

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          I&apos;m a software developer passionate about building modern,
          responsive, and useful web applications. Here are some of the
          projects I&apos;ve worked on.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold text-slate-900">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}