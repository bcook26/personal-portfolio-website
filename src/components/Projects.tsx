import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-16 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {projects
            .filter(project => project.featured)
            .map(project => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
          ))}

        </div>

      </div>

    </section>
  );
}
