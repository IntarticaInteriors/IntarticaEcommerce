
require("dotenv").config();
const axios = require("axios");


const backendUrl = "http://localhost:3000/v1";



export const signup = async (payload) => {
    try {
      const response = await axios.post(`${backendUrl}/`, payload);
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