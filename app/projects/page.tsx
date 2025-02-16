import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Projetos 👇👇</h1>
      <div className="">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 border-t border-neutral-200 dark:border-neutral-700 py-5 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <h2 className="text-black dark:text-white pb-3 text-xl">✅{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
              {project.image && (
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mt-2"
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
