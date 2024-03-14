"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import CommandSearch from "./CommandSearch";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Navbar = () => {
  const [pincode, setPincode] = useState("123415");
  return (
    <div className="flex justify-between px-10 py-1 items-center">
      <div>
        <Image src="/Logo.png" width={150} height={66} alt="logo" />
      </div>
      <div className="flex  items-center">
        <div>
          <IoLocationOutline className="text-3xl" />
        </div>
        <div className="flex flex-col items-center justify-start">
          <div className="text-slate-500  text-sm">Delivering to {pincode}</div>
          <div>
            <div className="text-sm" >Update Location</div >
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <CommandSearch />
          {/* <Input type="email" placeholder="Email" /> */}
          <Button type="submit" className="text-2xl">
            {" "}
            <CiSearch />{" "}
          </Button>
        </div>
      </div>
      <div>Accounts</div>
      <div>Returns and Orders</div>
      <div className="text-2xl">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Navbar;
