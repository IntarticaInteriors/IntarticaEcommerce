const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { projectService } = require('../services');
const config = require('../config/config');

const createProject = catchAsync(async (req, res) => {
  const createdProject = await projectService.createProject(req.body);
  res.send(createdProject);
});

const getProjects = catchAsync(async (req, res) => {
  console.log(req.body);
  const results = await projectService.getAllProjects(req.body);
  res.send(results);
});

// const getProjectForUser = catchAsync(async (req, res) => {
//   const results = await projectService.getAllProjects(req.body);
//   res.send(results);
// });


const getProjectById = catchAsync(async (req, res) => {
  const project = await projectService.getProjectById(req.params.proj_id);
  if (!project) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }
  res.send(project);
});

const updateProject = catchAsync(async (req, res) => {
  const project = await projectService.updateProject(req.params.proj_id, req.body);
  if(!project){
    throw new ApiError(httpStatus.NOT_FOUND, 'Project not found');
  }
  res.send(project);
});

const deleteProject = catchAsync(async (req, res) => {
  console.log('deleteProject', req.params.proj_id);
  await projectService.deleteProject(req.params.proj_id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
