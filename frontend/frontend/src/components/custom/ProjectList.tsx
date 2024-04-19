// components/ProjectList.js
import React from "react";
import { Card } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import { FaPlus } from "react-icons/fa";
const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-4 gap-5 py-7">
      <Card className="p-5 flex justify-center gap-4 items-center">
    
          <FaPlus className="text-3xl"/>
          <h2>New Order</h2>
      </Card>
      {projects.map((project, index) => (
        <Card className="p-5">
          <ProjectCard key={index} {...project} />
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
