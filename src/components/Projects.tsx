import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section className="border-t border-zinc-800/80 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="projects"
          label="Projects"
          title="Key projects"
          description="Client work and academic builds across product, marketing, and full-stack systems."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} large />
          ))}
        </div>

        {other.length > 0 ? (
          <div className="mt-6 grid gap-6">
            {other.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-zinc-700 hover:bg-zinc-900/80 ${
        large ? "lg:p-8" : ""
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3
          className={`font-semibold text-zinc-50 ${large ? "text-3xl" : "text-2xl"}`}
        >
          {project.title}
        </h3>
        {(project.liveUrl || project.repoUrl) ? (
          <div className="flex shrink-0 gap-2">
            {project.liveUrl ? (
              <LinkButton href={project.liveUrl} label="Live" />
            ) : null}
            {project.repoUrl ? (
              <LinkButton href={project.repoUrl} label="Code" />
            ) : null}
          </div>
        ) : null}
      </div>

      <p className="mb-4 flex-1 text-lg leading-relaxed text-zinc-400">
        {project.description}
      </p>

      <p className="mb-4 font-mono text-base text-emerald-400/90">
        {project.impact}
      </p>

      <ul className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-zinc-800/80 px-2.5 py-1 font-mono text-xs text-zinc-400"
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-lg border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300 transition group-hover:border-emerald-500/50 hover:border-emerald-500 hover:text-emerald-400"
    >
      {label}
    </a>
  );
}
