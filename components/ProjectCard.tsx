interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="bg-white border rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-green-700 mb-2">
        {title}
      </h2>

      <p className="text-gray-700 mb-4">
        {description}
      </p>

      <p className="text-gray-600 mb-4">
        <strong>Technologies:</strong>{" "}
        {technologies.join(", ")}
      </p>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-700 font-semibold hover:underline"
        >
          View Project
        </a>
      )}
    </article>
  );
}