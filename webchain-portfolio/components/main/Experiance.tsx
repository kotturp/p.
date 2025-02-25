import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="Experiance"
    >
      <h1 className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        <div className="transform scale-125">
          <ProjectCard
            src="/reality.png"
            title="RealityAI"
            description="Software Developer"
          />
        </div>
        <ProjectCard
          src="/tom.jpg"
          title="Tomorrows AI"
          description="Software Developer"
        />
        <ProjectCard
          src="/infosys.png"
          title="Infosys"
          description="Software Engineer"
        />
      </div>
    </div>
  );
};

export default Projects;
