"use client";
import React from "react";
import plywood from "../../../assests/products/plywood.jpeg";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

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
      <div className="container py-10 flex gap-10 flex-wrap grid grid-cols-3 justify-start  align-center">
        {plywoodComponents.map((plywoodComp) => (
          <Link href={`/product/${plywoodComp.title}`} key={plywoodComp.title}>
            <Card className="py-4 z-0 ">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-lg uppercase font-bold">
                  {plywoodComp.title}
                </p>
                <small className="text-default-500">Price</small>
                <h4 className="font-bold text-large">{plywoodComp.price}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  isZoomed
                  alt="Card background"
                  className=" object-contain rounded-xl"
                  src={plywoodComp.src.src}
                  width={200}
                />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
