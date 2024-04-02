import React from "react";
import plywood from "../../../assests/products/plywood.jpeg";
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
      <h1 className="text-center my-5 font-bold text-2xl ">Plywood</h1>
      <div className="container py-10 flex gap-10 flex-wrap justify-start align-center">
        {plywoodComponents.map((plywoodComp) => (
          <Link href={`/product/${plywoodComp.title}`} key={plywoodComp.title}>
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg"
              style={{ width: "300px", height: "300px" }}
            >
              <img
                className="w-full"
                src={plywoodComp.src.src}
                // height={100}
                alt="Plywood"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-md mb-2">
                  {plywoodComp.title}
                </div>
                <p className="text-gray-700 text-base">
                  Price - {plywoodComp.price}-
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
