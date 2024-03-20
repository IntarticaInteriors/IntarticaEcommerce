"use client";
import React, { useState } from "react";
import axios from "axios";

const backendUrl = "http://localhost:3000/v1";

const Page = () => {
  const [files, setFiles] = useState([]);
  const [captions, setCaptions] = useState([]);

  const submit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`image`, file);
    });
    captions.forEach((caption, index) => {
      formData.append(`captions[${index}]`, caption);
      console.log(files[index]);
    });
    console.log("formData",formData);
    await axios.post(`${backendUrl}/products/create-product`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
  };

  const handleCaptionChange = (index, value) => {
    const newCaptions = [...captions];
    newCaptions[index] = value;
    setCaptions(newCaptions);
  };

  return (
    <form onSubmit={submit}>
      <input
        onChange={handleFileChange}
        type="file"
        accept="image/*"
        multiple
      ></input>
      {files.map((file, index) => (
        <input
          key={index}
          value={captions[index] || ""}
          onChange={(e) => handleCaptionChange(index, e.target.value)}
          type="text"
          placeholder="Caption"
        ></input>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
