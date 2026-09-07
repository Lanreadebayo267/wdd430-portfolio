import SkillCard from "@/components/SkillCard";

const skills = [
  {
    title: "Frontend Development",
    description:
      "I build responsive and accessible user interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    title: "Backend Development",
    description:
      "I develop APIs and backend applications using Node.js, Express, MongoDB, and other modern technologies.",
  },
  {
    title: "Python Development",
    description:
      "I use Python for programming, automation, data analysis, and exploring AI engineering.",
  },
];

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <section className="mb-12">
        <p className="mb-3 font-semibold uppercase tracking-widest text-slate-500">
          About Me
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Software Developer
        </h1>

        <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
          I am a software development student and aspiring full-stack
          developer who enjoys creating useful applications and learning
          modern technologies. I am particularly interested in web
          development, backend systems, Python, and artificial intelligence.
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-bold text-slate-900">
          My Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}