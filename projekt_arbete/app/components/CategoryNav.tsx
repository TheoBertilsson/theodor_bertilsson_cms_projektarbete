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
    setSelectedCategory(uniqueCategories === selectedCategory ? null : uniqueCategories);
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
    console.log(projects);


  return (
    <>
      <nav className="flex justify-center gap-5 ">
        {uniqueCategories.map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category ? "underline font-semibold" : ""
            } p-2`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      {filteredProjects.map((item: any) => (
        <ProjectCard key={item.sys.id} project={item} />
      ))}
    </>
  );
};

export default CategoryNav;
