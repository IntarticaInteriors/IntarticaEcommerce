"use client"
import React,{useContext} from "react";
import { UserContext } from "@/contexts/userContext";
const page = () => {
    // const data=useContext(UserContext);
    const data = useContext(UserContext);
    console.log(data);
  return (
    <div>
      
      <div>default</div>
    </div>
  );
};

export default page;
