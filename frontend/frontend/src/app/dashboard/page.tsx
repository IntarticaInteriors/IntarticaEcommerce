"use client";
import React, { useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import HeroLayout from "@/layouts/HeroLayout";
import Top from "@/layouts/Top";
import Testimonials from "@/layouts/Testimonials";
import Shop from "@/layouts/Shop";
import Gallery from "@/layouts/Gallery";
const page = () => {
  // const data=useContext(UserContext);
  const data = useContext(UserContext);

  return (
    <div className="">
      <div className="hero my-10">
        <HeroLayout />
      </div>
      <div className="top-products"><Top/></div>
      <div className="testimonials"><Testimonials/></div>
      <div className="shop-options"><Shop/></div>
      <div className="product-gallery"><Gallery/></div>
      <div className="product-review">product</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default page;
