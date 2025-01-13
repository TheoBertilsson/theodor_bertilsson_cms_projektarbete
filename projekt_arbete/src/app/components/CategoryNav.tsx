"use client";

import { FC, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

interface CategoryNavProps {
  uniqueCategories: string[];
  projects: any;
}

const CategoryNav: FC<CategoryNavProps> = ({ uniqueCategories, projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (uniqueCategories: string | null) => {
    setSelectedCategory(
      uniqueCategories === selectedCategory ? null : uniqueCategories
    );
  };
  // Filter projects by selected category
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    const filtered = selectedCategory
      ? projects.filter((item: any) =>
          item.fields.categories.includes(selectedCategory)
        )
      : projects;
    setFilteredProjects(filtered);
  }, [selectedCategory, projects]);

  return (
    <>
      <div className=" flex flex-col-reverse md:flex-row gap-5">
        <div className="flex flex-wrap justify-evenly items-center gap-5">
          {filteredProjects.map((item: any) => (
          <ProjectCard key={item.sys.id} project={item} />
        ))}
        </div>

        <div className="flex flex-row md:flex-col justify-start items-start flex-wrap bg-foreground border-[1px] border-border p-3 shadow-xl h-fit">
          <h2 className="text-2xl font-semibold underline w-full">Categories</h2>
          {uniqueCategories.map((category) => (
            <button
              key={category}
              aria-label={`Filter by ${category}`}
              className={`${
                selectedCategory === category ? "underline font-semibold" : ""
              } p-2`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNav;
