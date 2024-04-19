const { PrismaClient } = require('@prisma/client');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const prisma = new PrismaClient();

/**
 * Create a project
 * @param {Object} userBody
 * @returns {Promise<prisma.Project>}
 */

const createProject = async (userBody) => {
  const { user_id, title, location, description, client_name } = userBody;
  const createdProject = await prisma.projects.create({
    data: {
      User: {
        connect: {
          user_id: user_id, // Use 'user_id' instead of 'proj_user_id'
        },
      },
      title: title,
      description: description,
      location: location,
      client_name: client_name,
      cart: {
        create: {
          items_in_cart: {},
        },
      },
    },
    include: {
      User: true,
      cart: true,
    },
  });

  console.log(createdProject);
  return createdProject;
};

const getAllProjects = async (userBody) => {
  const { user_id } = userBody;
  const allProjects = await prisma.projects.findMany({
    where: {
      proj_user_id: user_id,
    },
  });
  return allProjects;
};
const getProjectById = async (project_id) => {
  const foundProject = await prisma.projects.findFirst({
    where: {
      project_id: project_id,
    },
  });

  return foundProject;
};
const updateProject = async (proj_id, project_body) => {
  console.log("projectid is",proj_id);
  const foundProject = await prisma.projects.update({
    where: {
      project_id: proj_id,
    },
    data: project_body,
  });
  return foundProject;
};
const deleteProject = async (project_id) => {
  const deletedProject=await prisma.projects.delete({
    where:{
      project_id:project_id
    }
  })
  return deletedProject;
};

module.exports = { createProject, updateProject, deleteProject, getAllProjects, getProjectById };
