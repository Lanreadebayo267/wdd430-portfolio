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
    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="mb-3 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mb-4 leading-relaxed text-slate-600">
        {description}
      </p>

      <div className="mb-5">
        <h4 className="mb-2 font-semibold text-slate-900">
          Technologies
        </h4>

        <ul className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-semibold text-slate-900 underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900"
        >
          View Project
        </a>
      )}
    </article>
  );
}