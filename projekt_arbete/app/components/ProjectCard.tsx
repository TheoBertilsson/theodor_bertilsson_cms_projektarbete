// components/ProjectCard.tsx
"use client";  // This indicates that this is a client-side component.

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <section className="w-[350px] h-[600px] pb-10 bg-[#FBFADA] rounded-2xl shadow-2xl flex flex-col items-center justify-start gap-5 border-2 border-border">
      <a href={`/${project.fields.slug}`} className="flex flex-col items-center justify-start gap-5 p-5">
        <img
          src={project.fields.thumbnailImage.fields.file.url}
          alt={project.fields.title}
          className="w-[280px] h-[280px] rounded-2xl m-3 border border-border"
        />
        <div className="flex flex-col items-start justify-start w-[70%] overflow-hidden max-h-52">
          <h3 className="font-semibold text-xl mb-5 underline">{project.fields.title}</h3>
            {documentToReactComponents(project.fields.description)}
        </div>
      </a>
    </section>
  );
}
