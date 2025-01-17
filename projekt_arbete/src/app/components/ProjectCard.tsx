// components/ProjectCard.tsx
"use client"; // This indicates that this is a client-side component.

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link
      className="w-[300px] h-[550px] p-5 bg-[#FBFADA]  shadow-xl flex flex-col items-center justify-start gap-5 border-[1px] border-border"
      href={`/projects/${project.fields.slug}`}
    >
      <img
        src={project.fields.thumbnailImage.fields.file.url}
        alt={`${project.fields.title} project preview`}
        className="w-[280px] h-[280px]  border border-border"
        loading="lazy"
        aria-label={`${project.fields.title} project preview`}
      />
      <h2 className="font-semibold text-xl mb-5 underline">
        {project.fields.title}
      </h2>
      <div className="flex flex-col items-start justify-start w-[70%] overflow-hidden max-h-52">
        {documentToReactComponents(project.fields.description)}
      </div>
    </Link>
  );
}
