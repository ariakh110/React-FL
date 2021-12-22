import React from "react";
import Container from "@mui/material/Container";

import HeroSVG from "../../Assets/images/world.svg";
import { Grid, Paper } from "@mui/material";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Projects = () => {
  return (
    <>
      <div className="container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 ">
        <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
          <div className="max-w-lg">
            <h1 className="text-xl tracking-wide text-white  lg:text-3xl lg:text-4xl ">
              PROJECT
            </h1>
            <p className="mt-4 text-white 	font-weight: 200 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
              asperiores alias vero magnam recusandae adipisci ad vitae
              laudantium quod rem voluptatem eos accusantium cumque.
            </p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue rounded-md "
              >
                Read More
              </button>
            </div>
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
      <Container maxWidth="xs">
        <Grid container>
          {itemData.map((item, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Paper  elevation={3}>
                <img src={item.img} alt={item.title} loading="lazy"/>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
