"use client";
import React from "react";
import { Button, Badge } from "@nextui-org/react";
import ProjectList from "../../components/custom/ProjectList";

const page = () => {
  const projects = [
    {
      name: "Project 1",
      status: "In Progress",
      description: "Description of Project 1",
    },
    {
      name: "Project 2",
      status: "Completed",
      description: "Description of Project 2",
    },
    {
      name: "Project 3",
      status: "In Progress",
      description: "Description of Project 3",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Create Project
          </button>
        </div>
      </div>
      <div>
        <div className="mb-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded mr-2">
            In Progress
          </span>
          <span className="bg-green-400 text-white px-3 py-1 rounded mr-2">
            Completed
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded mr-2">
            All
          </span>
        </div>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
};

export default page;
