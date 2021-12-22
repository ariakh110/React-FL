import React from 'react'

import HeroSVG from "../../Assets/images/world.svg";
const Shop = () => {
    return (
        < >
        <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg">
              <h1 className="text-xl tracking-wide text-white  lg:text-3xl lg:text-4xl ">
                SHOP 
              </h1>
              <p className="mt-4 text-white 	font-weight: 200 ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
            <img
              className="object-cover	h-80 w-100"
              src={HeroSVG}
              alt="apple_watch_photo"
            />
          </div>
        </div>
      </>
    )
}

export default Shop
