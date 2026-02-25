"use client";

import { useState, useMemo } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { PortfolioIcon, MobileAppIcon, ApiIcon } from "./ProjectIcons";

const categories = [
  { value: "all", label: "전체" },
  { value: "ai-ax", label: "AI/AX" },
  { value: "research", label: "연구" },
  { value: "development", label: "개발" },
  { value: "content", label: "콘텐츠" },
] as const;

const allTechnologies = Array.from(
  new Set(projects.flatMap((p) => p.technologies))
).sort();

function getIcon(iconType: string) {
  switch (iconType) {
    case "portfolio":
      return <PortfolioIcon />;
    case "mobile-app":
      return <MobileAppIcon />;
    case "api":
      return <ApiIcon />;
    default:
      return <PortfolioIcon />;
  }
}

export default function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTechs, setActiveTechs] = useState<string[]>([]);

  const filtered = useMemo(() => {
    let result = projects;
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeTechs.length > 0) {
      result = result.filter((p) =>
        activeTechs.some((t) => p.technologies.includes(t))
      );
    }
    return result;
  }, [activeCategory, activeTechs]);

  const toggleTech = (tech: string) => {
    setActiveTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat.value
                ? "bg-blue-600 text-white"
                : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {allTechnologies.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              activeTechs.includes(tech)
                ? "bg-purple-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            {tech}
          </button>
        ))}
        {activeTechs.length > 0 && (
          <button
            onClick={() => setActiveTechs([])}
            className="px-3 py-1 rounded-full text-xs font-medium text-red-500 hover:text-red-700 dark:text-red-400"
          >
            초기화
          </button>
        )}
      </div>

      {/* Results */}
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
        {filtered.length}개 프로젝트
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            icon={getIcon(project.iconType)}
            gradientFrom={project.gradientFrom}
            gradientTo={project.gradientTo}
            buttonText={project.buttonText}
            href={project.href}
            category={project.category}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          조건에 맞는 프로젝트가 없습니다.
        </p>
      )}
    </div>
  );
}
