"use client";
import React from "react";
import plywood from "../../../assests/products/plywood.jpeg";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import ProductCard from "@/components/custom/ProductCard";
import Link from "next/link";

const Page = () => {
  const plywoodComponents = [
    {
      title: "Architect Ply",
      price: "3500/-",
      src: plywood,
    },
    {
      title: "Bond 71",
      price: "3500/-",
      src: plywood,
    },
    {
      title: "Classic Marine",
      price: "3500/-",
      src: plywood,
    },
    {
      title: "Sainik 710",
      price: "3500/-",
      src: plywood,
    },
    {
      title: "Bharosaply BWR",
      price: "3500/-",
      src: plywood,
    },
    {
      title: "Win MR",
      price: "3500/-",
      src: plywood,
    },
  ];
  return (
    <>
      <h1 className="text-center my-5 font-bold  text-2xl ">Plywood</h1>
      <div className="container py-10 flex gap-10 flex-wrap grid grid-cols-4 justify-start  align-center">
        {plywoodComponents.map((plywoodComp) => (
          <Link href={`/product/${plywoodComp.title}`} key={plywoodComp.title}>
            <ProductCard title={plywoodComp.title}  price={plywoodComp.price} image={plywoodComp.src.src} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
