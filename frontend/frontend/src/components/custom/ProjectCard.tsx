// components/ProjectCard.js
import React from "react";
import { Card, Avatar, Chip } from "@nextui-org/react";
import Image from "next/image";
const ProjectCard = ({ name, status, description }) => {
  return (
    <>
      <Image
        src="/Logo.png"
        alt="Project Image"
        width={250} height={250}
      />
      <div>
        <div className="flex justify-between my-2">

        <div>{name}</div>
        <Chip color={status=="Completed"?"success":"secondary"}>{status}</Chip>
        </div>
        <div>{description}</div>
      </div>
      </>
  );
};

export default ProjectCard;
