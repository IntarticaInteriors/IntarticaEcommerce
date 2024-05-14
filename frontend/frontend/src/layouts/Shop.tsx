import React from "react";
import { Card, CardBody,  } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const products = [
  {
    type: "Plywood",
    image: "/shopcategory/ply.jpg",
  },
  {
    type: "Blockboard",
    image: "/shopcategory/blockboard.jpg",
  },
  {
    type: "Hardware",
    image: "/shopcategory/hinge.jpg",
  },
];

const Shop = () => {
  return (
    <div className="container p-4 flex justify-center items-center gap-4 py-28">
      {products.map((product, index) => (
        <Card  key={index} shadow="sm" radius="none"  className="  border-none h-50 overflow-hidden flex items-center">
          <CardBody>
            <div className="flex justify-center items-center bg-blue-100 z-0">
              <div className="flex flex-col items-center w-48 mr-6">
                <div className="text-lg font-semibold mb-1">{product.type}</div>
                <Button className="my-2 bg-white" radius="none" variant="bordered" color="danger" >
                  Shop Now
                </Button>
              </div>
              <div className="relative h-48 w-48">
                <Image
                  alt={product.type}
                  className="object-cover rounded-md"
                  src={product.image}
                  layout="fill"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Shop;
