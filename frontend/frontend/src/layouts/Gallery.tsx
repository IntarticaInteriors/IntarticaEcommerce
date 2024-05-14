import React from 'react'
import { Chip } from '@nextui-org/react'
 import ResponsiveGallery from 'react-responsive-gallery';

 const media=[
    {
    src: '/gallery/RIO00002-HDR.jpg'
    },
    {
    src: '/gallery/RIO00012-HDR.jpg'
    },
    {
    src: '/gallery/RIO00018-HDR.jpg'
    },
    {
    src: '/gallery/RIO00023-HDR.jpg'
    },
    {
    src: '/gallery/RIO00035-HDR.jpg'
    },
    {
    src: '/gallery/RIO00104.jpg'
    },
    {
    src: '/gallery/RIO00115.jpg'
    },
    {
    src: '/gallery/RIO00127.jpg'
    },
    {
    src: '/gallery/RIO00128.jpg'
    },
    {
    src: '/gallery/RIO00164.jpg'
    }
    ];
const Gallery = () => {
  return (

    <div className="container mt-10 flex flex-col justify-center items-center ">
    <Chip className="mt-10" variant="flat" color="danger" radius="none">
      Our Collection  
    </Chip>
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold  my-5">Gallery</h2>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        eveniet, inventore consectetur adipisicing elit. Suscipit eveniet,
        inventore
      </h3>

    </div>
    <div style={{ maxWidth: "100%" }}>
      <ResponsiveGallery  media={media} />
    </div>

    </div>
  )
}

export default Gallery