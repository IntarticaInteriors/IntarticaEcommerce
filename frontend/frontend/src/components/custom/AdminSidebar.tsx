import React from "react";
import "./style.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const AdminSidebar = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="admin-dashboard bg-[#E01859] flex flex-col items-center justify-between text-white h-full p-10">
      <div>
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <div className="admin-items text-center">
          <div
            className={`px-6 py-3 my-6 cursor-pointer ${
              activeItem === 0 ? "bg-white text-black" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            Home
          </div>
          <div
            className={`px-6 py-3 my-6 cursor-pointer ${
              activeItem === 1 ? "bg-white text-black" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            Products
          </div>
          <div
            className={`px-6 py-3 my-6 cursor-pointer ${
              activeItem === 2 ? "bg-white text-black" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Orders
          </div>
          <div
            className={`px-6 py-3 my-6 cursor-pointer ${
              activeItem === 3 ? "bg-white text-black" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            Category
          </div>
          <div
            className={`px-6 py-3 my-6 cursor-pointer ${
              activeItem === 4 ? "bg-white text-black" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            Settings
          </div>
        </div>
      </div>

      <div className="social-items flex gap-5">
        <FaFacebookSquare />
        <FaSquareTwitter />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default AdminSidebar;
