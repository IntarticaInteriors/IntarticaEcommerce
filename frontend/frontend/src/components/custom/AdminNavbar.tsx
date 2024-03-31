"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import CommandSearch from "./CommandSearch";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import "./style.css";
import profileImg from "../../assests/profile-img.png";
import { RiCustomerService2Line } from "react-icons/ri";

const AdminNavbar = () => {
  const [pincode, setPincode] = useState("123415");
  return (
    <div className="admin-navbar flex justify-between px-10 py-1 items-center border-b-orange-50">
      <div>
        <Image src="/Logo.png" width={150} height={66} alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <div className="avatar">
          <RiCustomerService2Line />
        </div>
        <div className="avatar">
          <img src={profileImg.src} alt="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
