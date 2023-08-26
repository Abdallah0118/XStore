import React from "react";
import { Button } from "@material-tailwind/react";
import HeroSectionCarousel from "../components/HeroSectionCarousel";

const About = () => {
  return (
    <div>
      About
      <div>
        <Button
          color="indigo"
          style={{ textTransform: "none", fontFamily: "inherit" }}
        >
          Button
        </Button>
        <HeroSectionCarousel />
      </div>
    </div>
  );
};

export default About;
