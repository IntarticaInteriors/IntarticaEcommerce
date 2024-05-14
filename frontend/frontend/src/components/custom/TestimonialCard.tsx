"use client";
import React, { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import  Rating  from "react-rating";
import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";


const TestimonialCard = (props) => {
    
  const { content, stars } = props;

  // Optinal callback functions

  return (
    <div className="mx-2 p-4 bg-white" w-50>
      <div className="text-3xl text-[#E52B50] ">
        <RiDoubleQuotesL />
      </div>
      <div>{content}</div>
      <div className="flex justify-end">
        <Rating
        readonly
         initialRating={stars}
        emptySymbol={<GoStar color="gold"/>}
        fullSymbol={<GoStarFill color="gold"/>}
        fractions={2}
         />
      </div>
    </div>
  );
};

export default TestimonialCard;
