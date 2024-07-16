"use client";
import React, { useState, useEffect } from "react";
import { Button, Badge } from "@nextui-org/react";
import ProjectList from "../../components/custom/ProjectList";
import { getProjects, createProject } from "@/services/projectServices";
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

const page = () => {
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

  // console.log(watch("title"));
  // console.log(watch("description"));
  // console.log(watch("location"));
  // console.log(watch("title"));
  let reload=0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectCounter,setProjectCounter]=useState(0);
  const handleOpen = () => {
    onOpen();
  };

  const handleOnClick = () => {
    handleOpen();
  };


  const [projects, setProjects] = useState();
  useEffect(() => {
    getProjects({ user_id: "533b2b4a-62d2-4ae1-9a80-1689ff5b130c" })
      .then((res) => {
        setProjects(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [projectCounter]);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="space-x-2">
          <Button
            onClick={handleOnClick}
              
            className="bg-[#E52B50] text-white px-4 py-2 rounded"
          >
            Create Project
          </Button>
        </div>
      </div>
      <div>
       
        {projects && (
          <ProjectList projects={projects} />
        )}
      </div>
      <Modal size={"md"} isOpen={isOpen} onClose={onClose}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            const payload = {
              user_id: "89b853d2-edbc-4af2-834d-b8d09d79bf9e",
              ...data,
            };
            console.log("payload",payload);
            try {
              createProject(payload)
                .then((res) => {
                  console.log(res);
                  setProjectCounter(projectCounter=>projectCounter+1);
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

export default page;
