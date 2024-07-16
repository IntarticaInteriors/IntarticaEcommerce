
require("dotenv").config();
const axios = require("axios");


const backendUrl = "http://localhost:3000/v1";



export const createProject = async (payload) => {
    try {
      const response = await axios.post(`${backendUrl}/projects/create-project`, payload);
      console.log("createProject successful:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error during createProject:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  };
  
export const getProjects = async (payload) => {
  try {
    const response = await axios.get(`${backendUrl}/projects/get-projects`, payload);
    console.log("getProjects successful:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error during getProjects:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const getProjectById = async (payload) => {
  const {proj_id}=payload;
  try {
    const response = await axios.get(`${backendUrl}/projects/get-projects/${proj_id}`);
    console.log("getProjectById successful:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error during getProjectById:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const updateProject = async (payload) => {
  const {proj_id,...rest}=payload;
  try {
    const response = await axios.put(`${backendUrl}/projects/update-project/${proj_id}`,rest);
    console.log("UpdateProject successful:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error during updateProject:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const deleteProject = async (payload) => {
  const {proj_id}=payload;
  try {
    const response = await axios.delete(`${backendUrl}/projects/delete-project/${proj_id}`);
    console.log("DeleteProject successful:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error during deleteProject:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};