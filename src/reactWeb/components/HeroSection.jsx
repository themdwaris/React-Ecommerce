import React from "react";
import Button from "./Button";
import { useYourContext } from "./context/context";

const HeroSection = () => {
  const { fname, lname, image, title, toredirect } = useYourContext();

  return (
    <>
      <div className="heroContainer maincontainer">
        <div className="heroSection">
          <div className="heroleft hero">
            <div className="herotext">
              <p className="title text" data-aos="fade-up">Reactjs Front-End Developer</p>
              <h1 className="heading" data-aos="fade-up">
                Hi, I'am {fname}
                <br></br> <span>{lname}</span> Web Dev
              </h1>
              <p className="desc text" data-aos="fade-up">
                Lorem {`${fname} ${lname}`} dolor sit amet consectetur
                adipisicing elit.
                <br></br> A repudiandae ex iusto esse eaque quae.
              </p>
              <div className="links" data-aos="fade-up">
                <a href="https://github.com/themdwaris" target='_blank'><ion-icon name="logo-github"></ion-icon></a>
                <a href="https://in.linkedin.com/in/themdwaris" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://www.instagram.com/themdwaris/" target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
                <a href="https://themdwaris.netlify.app" target='_blank'><ion-icon name="globe-outline"></ion-icon></a>
              </div>
              <Button data={{ title, toredirect }} data-aos="fade-up" />
            </div>
          </div>
          <div className="heroright hero rotate" data-aos="fade-up">
            <div>
              <img src={image} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;
