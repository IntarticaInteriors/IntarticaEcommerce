import React from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Button } from '@nextui-org/react';

const ProductCard = (props) => {
    const { title, price, image } = props;

    return (
        <Card className="py-4 z-0" radius='none' shadow="sm">
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <p className="text-lg uppercase font-bold">{title}</p>
                <small className="text-default-500">Price</small>
                <h4 className="font-bold text-large">{price}</h4>
            </CardHeader>

            <CardBody className="overflow-visible py-2 flex justify-center">
                <div className="w-100 h-80 overflow-hidden rounded-xl ">
                    <Image
                        isZoomed
                        alt="Card background"
                        src={image}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-xl"
                    />
                </div>
                <Button className="bg-red-300 my-2">Add to Cart</Button>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
