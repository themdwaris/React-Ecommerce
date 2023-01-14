import React, { useEffect } from "react";
import { useYourContext } from "../components/context/context";
import FeatureProducts from "../components/FeatureProducts";
import HeroSection from "../components/HeroSection";
import Feature from "./Service";

const Home = () => {
  const { updateHome } = useYourContext();

  useEffect(() => {
    updateHome();
  }, []);

  return (
    <>
      <div className="homeContainer lr-pad martop">
        <HeroSection />
      </div>
      <FeatureProducts/>
      <Feature />
    </>
  );
};

export default Home;
