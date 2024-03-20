require("dotenv").config();
const axios = require("axios");

const backendUrl = "http://localhost:3000/v1"; // Replace with your actual variable name from .env

export const signup = async (payload) => {
  try {
    const response = await axios.post(`${backendUrl}/auth/register`, payload);
    console.log("Signup successful:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error during signup:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export const login = async (payload) => {
  try {
    const response = await axios.post(`${backendUrl}/auth/login`, payload);
    console.log("login successful:", response.data);
    return response.data;
  } catch (error) {
    console.log(
      "Error during login:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
