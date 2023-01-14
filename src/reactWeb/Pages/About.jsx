import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { useYourContext } from "../components/context/context";
import Feature from "./Service";

const About = () => {
  const { updateAbout } = useYourContext();

  useEffect(() => {
    updateAbout();
  }, []);

  return (
    <>
      <div className="homeContainer lr-pad martop">
        <HeroSection />
      </div>
      <Feature />
    </>
  );
};

export default About;
