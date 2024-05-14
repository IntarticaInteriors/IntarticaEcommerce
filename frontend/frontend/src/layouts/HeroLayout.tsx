"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


const responsive2 = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const HeroLayout = () => {
  return (
    <div className="container">
      <div className=" flex justify-center" style={{ fontSize: "3rem" }}>
        Welcome to Intartica{" "}
      </div>
      <h2 className="text-2xl flex justify-center">
        Where Dreams Reside in Design
      </h2>
      <div className="my-6"></div>
      <div className="text-slate-500 flex flex-col items-center justify-center whitespace-pre-line overflow-hidden h-12">
        Ready to transform your living space into a dream abode? Let's embark on
        this journey together.
        <div>
          Explore our services or connect with us to discuss your vision.
        </div>
      </div>
      <div className="py-10"></div>
      <div className="flex justify-center my-3">
        <div
          className="mx-auto rounded-2xl flex  justify-center items-center"
          style={{ width: "40rem" }}
        >
          <Input
            // label="Find Products"
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Search items to buy"
            startContent={
              <CiSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
            style={{ padding: "2rem" }}
          />
        </div>
      </div>
      <div
        style={{ marginTop: "3rem" }}
        className="w-full flex justify-center"
      ></div>
    
      <div className="brands container my-16 ">
        <Carousel
           swipeable={true}
           draggable={true}
           responsive={responsive2}
           ssr={true} // means to render carousel on server-side.
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={4000}
           keyBoardControl={true}
           customTransition="all 1s linear"
           transitionDuration={500}
           removeArrowOnDeviceType={["tablet", "mobile", "desktop","superLargeDesktop"]}
        >
          <div>
            <div>
              <Image
                src="/brands/logo1.svg"
                width={188}
                height={91}
                alt="brand1"
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/brands/logo2.svg"
                width={188}
                height={91}
                alt="brand1"
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/brands/logo3.svg"
                width={188}
                height={91}
                alt="brand1"
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/brands/logo4.svg"
                width={188}
                height={91}
                alt="brand1"
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                src="/brands/logo3.svg"
                width={188}
                height={91}
                alt="brand1"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroLayout;
