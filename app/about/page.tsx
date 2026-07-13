import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-green-700 mb-6">
        About Me
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        Hello! I am Lanre Adebayo, a software developer and BYU-Idaho student who enjoys
        building responsive web applications. I am currently learning React,
        Next.js, TypeScript, and full-stack web development. I have experience in HTML, CSS,
        JavaScript, and Python, and I am always eager to learn new technologies and improve my skills.
        I am passionate about creating user-friendly and efficient applications that solve real-world problems.
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
          "RESTful APIs",
          "Responsive Design",
          "Tailwind CSS",
          "SQL",
          "Python",
          "C#",
          "MS Office",
          "MongoDB",
          "Docker",
          "Squash TM",
          "Postman"
        ]}
      />
    </main>
  );
}