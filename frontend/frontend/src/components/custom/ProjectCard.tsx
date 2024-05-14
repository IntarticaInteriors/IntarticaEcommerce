// components/ProjectCard.js
import React from "react";
import { Card, Avatar, Chip } from "@nextui-org/react";
import Image from "next/image";
// import {  } from "@nextui-org/react";
const ProjectCard = ({ name, status, description }) => {
  return (
    <div>
      {/* <div className="w-30 h-30"> */}
        <Image src="/next.svg" alt="Project Image" objectFit="contain" className="w-full object-contain" width={100} height={100} />
      {/* </div> */}
      <div>
        <div className="flex justify-between my-2">
          <Chip color="danger">{name}</Chip>
          <Chip color={status == "Completed" ? "success" : "secondary"}>
            {status}
          </Chip>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
