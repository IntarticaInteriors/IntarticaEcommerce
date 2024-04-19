import React from "react";
import { CiShoppingCart, CiUser,CiHeart } from "react-icons/ci";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
const NavBarForHomePage = () => {
  return (
    <div className=" border shadow-md  ">
      <div className="flex justify-between items-center bg-gray-900 text-black text-2xl font-bold px-4 shadow-2xl">
        <div className="flex items-center space-x-4">
          <CiFacebook />
          <CiTwitter />
          <CiInstagram />
        </div>
        <div className="flex items-center">
          {/* Logo */}
          <img src="/Logo.png" alt="Company Logo" className="" width={180} />
        </div>
        <div className="flex items-center space-x-4">
          <CiHeart />
          <CiUser />
          <CiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default NavBarForHomePage;
