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

const AdminNavbar = () => {
  const [pincode, setPincode] = useState("123415");
  return (
    <div className="admin-navbar flex justify-between px-10 py-1 items-center border-b-orange-50">
      <div>
        <Image src="/Logo.png" width={150} height={66} alt="logo" />
      </div>
      <div className="flex  items-center">
        <div className="avatar">
          <img src="/Logo.png" alt="customer-img" width={100} height={100} />
        </div>
        <div className="avatar">
          <img src="/Logo.png" alt="profile-img" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
