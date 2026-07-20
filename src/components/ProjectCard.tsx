import Link from "next/link";
import { Project } from "@/types/portfolio";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-lg transition">

      <div className="flex justify-between">

        <span className="text-sm text-blue-600">
          {project.category}
        </span>

        <span className="text-sm text-gray-500">
          {project.status}
        </span>

      </div>

      <h3 className="text-2xl font-bold mt-3">
        {project.title}
      </h3>

      <p className="mt-4 text-gray-600">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-5">

        {project.technologies.map((tech) => (

          <span
            key={tech}
            className="border rounded-full px-3 py-1 text-sm"
          >
            {tech}
          </span>

        ))}

      </div>

      <div className="flex gap-6 mt-6">

        <a
          href={project.github}
          target="_blank"
        >
          GitHub →
        </a>

        {/* Future */}
        {/* <Link href={`/projects/${project.slug}`}>
            Read More →
        </Link> */}

      </div>

    </div>
  );
}
