// components/ProjectList.js
import React, { useState } from "react";
import { Button, Card } from "@nextui-org/react";
import ProjectCard from "./ProjectCard";
import { FaPlus } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProject } from "@/services/projectServices";
const ProjectList = ({ projects }) => {
  const schema = z.object({
    title: z.string(),
    description: z.string(),
    client_name: z.string(),
    location: z.string(),
  });

  type FormField = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormField>({
    resolver: zodResolver(schema),
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectCounter, setProjectCounter] = useState(0);
  const [updateProjectId,setUpdateProjectId]=useState("");
  const [updateComplete,setUpdateComplete]=useState(0);
  const handleOpen = () => {
    onOpen();
  };

  const handleOnClick = (project_id) => {
    console.log("project_Id",project_id);
    setUpdateProjectId(project_id)
    handleOpen();
  };

  return (
    <div className="grid grid-cols-4 gap-5 py-7">
      {projects.map((project, index) => (
        // <Card radius="none" shadow="sm" className="p-5">
        <ProjectCard key={index} {...project} handleOnClick={handleOnClick}/>
        // </Card>
      ))}

      {/* //modal code */}
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            const payload = {
              proj_id: updateProjectId,
              ...data,
            };
            console.log("payload", payload);
            try {
              updateProject(payload)
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => {
                  console.log(error);
                });
            } catch (error) {
              console.log(error);
            }
            onClose();
          })}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Create Project
                </ModalHeader>
                <ModalBody>
                  <Input
                    {...register("title", { required: true })}
                    type="text"
                    label="Title"
                    placeholder="Enter your title"
                  />
                  <Input
                    {...register("description", { required: true })}
                    type="text"
                    label="Description"
                    placeholder="Enter your description"
                  />
                  <Input
                    {...register("location", { required: true })}
                    type="text"
                    label="Location"
                    placeholder="Enter your location"
                  />
                  <Input
                    {...register("client_name", { required: true })}
                    type="text"
                    label="Client Name"
                    placeholder="Enter your client name"
                  />
                  <Button type="submit" color="primary">
                    Create Project
                  </Button>
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button> */}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectList;
