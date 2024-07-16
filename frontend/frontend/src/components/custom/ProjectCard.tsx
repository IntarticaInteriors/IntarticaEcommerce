// components/ProjectCard.js
import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import {
  Card,
  Avatar,
  Chip,
  Divider,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
} from "@nextui-org/react";
import Image from "next/image";
// import {  } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { deleteProject } from "@/services/projectServices";
const ProjectCard = ({
  title,
  location,
  description,
  project_id,
  client_name,
  cart_id,
  handleOnClick,
}) => {
  const handleOnDelete = (project_id) => {
    const payload={proj_id:project_id}
    try {
      
      deleteProject(payload)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card shadow="sm" className="max-w-[500px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{location}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
        <Link isExternal href="#" className="bg-white text-[#E52B50] ">
          <span>
            {" "}
            Shop for Project <CiShoppingCart className=" text-xl" />
          </span>
        </Link>
        <Button
          onClick={() => handleOnClick(project_id)}
          size="sm"
          variant="bordered"
          className=" text-black"
        >
          <CiEdit />
        </Button>
        <Button
          onClick={() => handleOnDelete(project_id)}
          size="sm"
          variant="bordered"
          className=" text-black"
        >
          <MdDelete />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
