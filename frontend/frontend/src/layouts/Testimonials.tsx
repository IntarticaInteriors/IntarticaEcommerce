import React from "react";
import { Chip } from "@nextui-org/react";
import TestimonialCard from "@/components/custom/TestimonialCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter:40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 40

  },
};
const testimonials = [
  {
    content:
      "I recently purchased furniture from this website, and I couldn't be happier with my experience. The quality of the furniture is outstanding, and it arrived exactly as described. The customer service was top-notch, with prompt and helpful responses to all my inquiries. I highly recommend this website for anyone looking to buy furniture for their home.",
    stars: 4,
  },
  {
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit minus molestias voluptatem ex, delectus esse consequuntur, quaerat distinctio laborum provident deleniti ratione odio sed suscipit dignissimos iste sunt impedit.",
    stars: 3,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid illo delectus illum pariatur blanditiis quas, excepturi, incidunt quibusdam tempore voluptates ipsa officiis natus accusamus in alias dolor rerum! Voluptas!",
    stars: 2.5,
  },
  {
    content:
      "I recently purchased furniture from this website, and I couldn't be happier with my experience. The quality of the furniture is outstanding, and it arrived exactly as described. The customer service was top-notch, with prompt and helpful responses to all my inquiries. I highly recommend this website for anyone looking to buy furniture for their home.",
    stars: 4,
  },
  {
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit minus molestias voluptatem ex, delectus esse consequuntur, quaerat distinctio laborum provident deleniti ratione odio sed suscipit dignissimos iste sunt impedit.",
    stars: 3,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid illo delectus illum pariatur blanditiis quas, excepturi, incidunt quibusdam tempore voluptates ipsa officiis natus accusamus in alias dolor rerum! Voluptas!",
    stars: 2.5,
  },
  {
    content:
      "I recently purchased furniture from this website, and I couldn't be happier with my experience. The quality of the furniture is outstanding, and it arrived exactly as described. The customer service was top-notch, with prompt and helpful responses to all my inquiries. I highly recommend this website for anyone looking to buy furniture for their home.",
    stars: 4,
  },
  {
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit minus molestias voluptatem ex, delectus esse consequuntur, quaerat distinctio laborum provident deleniti ratione odio sed suscipit dignissimos iste sunt impedit.",
    stars: 3,
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid illo delectus illum pariatur blanditiis quas, excepturi, incidunt quibusdam tempore voluptates ipsa officiis natus accusamus in alias dolor rerum! Voluptas!",
    stars: 2.5,
  },
];
const Testimonials = () => {
  return (
    <div className=" mt-10 flex flex-col justify-center items-center bg-pink-100">
      <Chip className="mt-10" variant="flat" color="warning" radius="none">
        Testimonials Section
      </Chip>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold  my-5">What our Customers Say</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          eveniet, inventore consectetur adipisicing elit. Suscipit eveniet,
          inventore
        </h3>
      </div>
      <div className="container my-10 ">
        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all 1s linear"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", ]}
          
        >
          {testimonials.map((test, ind) => {
            return (
              <>
                <TestimonialCard content={test.content} stars={test.stars}  />
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
