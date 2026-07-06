import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        About Me
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Hello! I am Lanre Adebayo, a software developer and BYU-Idaho student who enjoys
        building responsive web applications. I'm currently learning React,
        Next.js, TypeScript, and full-stack web development.
      </p>

      <SkillCard
        title="Technical Skills"
        skills={[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Git & GitHub",
        ]}
      />
    </main>
  );
}