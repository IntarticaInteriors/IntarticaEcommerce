require("dotenv").config();
const axios = require("axios");

const backendUrl = "http://localhost:3000/v1"; // Replace with your actual variable name from .env

export const createProduct = async (payload) => {
  console.log("backendurl", backendUrl);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  try {
    const config = { Headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post(
      `${backendUrl}/products/create-product`,
      payload,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getProducts = async () => {
  console.log("backendurl", backendUrl);
  const token = localStorage.getItem("accessToken");
  console.log(token);
  try {
    const config = { Headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(
      `${backendUrl}/products/get-product`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    throw error;
  }
};
