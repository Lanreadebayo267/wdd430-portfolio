import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "NaijaExplorer",
    description:
      "A responsive tourism website showcasing beautiful destinations across Nigeria.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Lanreadebayo267/naijaexplorer",
  },
  {
    title: "Expense Tracker",
    description:
      "A Next.js application for tracking daily income and expenses with a clean dashboard.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/Lanreadebayo267/expense-tracker",
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