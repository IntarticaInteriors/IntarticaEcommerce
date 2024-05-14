import React from "react";
import { Chip } from "@nextui-org/react";
import ProductCard from "@/components/custom/ProductCard";
import plywood from "../assests/products/plywood.jpeg";
const Top = () => {
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
    <div className="container flex flex-col justify-center items-center">
      <Chip color="danger" radius="none" variant="flat">
        Check our Products
      </Chip>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold  my-5">
            Crafted with Excellent Material
          </h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            eveniet, inventore consectetur adipisicing elit. Suscipit eveniet,
            inventore
          </h3>
        </div>
        <div className=" container my-5 grid grid-cols-4 gap-8">
          {plywoodComponents.map((p, i) => {
            return (
              <>
                <ProductCard
                  title={p.title}
                  price={p.price}
                  image={p.src.src}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
