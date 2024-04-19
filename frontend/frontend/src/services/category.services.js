require("dotenv").config();
const axios = require("axios");

const backendUrl = "http://localhost:3000/v1"; // Replace with your actual variable name from .env

export const createCategory = async (payload) => {
  console.log("backendurl", backendUrl);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  try {
    const config = { Headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post(
      `${backendUrl}/category/create-category`,
      payload,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getCategories = async () => {
  console.log("backendurl", backendUrl);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  try {
    const config = { Headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `${backendUrl}/category/get-category`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

//To do Tasks

//API for update
export const updateCategory = async (prod_id) => {
  console.log("backendurl", backendUrl);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  try {
    const config = { Headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `${backendUrl}/products/update-category/${prod_id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

//API for delete
export const deleteCategory = async (prod_id) => {
  console.log("backendurl", backendUrl);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  try {
    const config = { Headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `${backendUrl}/products/delete-category/${prod_id}`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

//API for categories CRUD
