"use client"
import React,{useContext} from "react";
import { UserContext } from "@/contexts/userContext";
import HeroLayout from "../../layouts/HeroLayout"
import Home from "./home/page";
const page = () => {
    // const data=useContext(UserContext);
    const data = useContext(UserContext);
  return (
    <div className="">
      <div className="hero my-10"><HeroLayout/></div>
      <div className="brands">brands</div>
      <div className="top-products">top</div>
      <div className="testimonials">testimonials</div>
      <div className="shop-options">shop</div>
      <div className="product-gallery">product</div>
      <div className="product-review">product</div>
      <div className="footer">footer</div>
    </div>
  );
};

export default page;
