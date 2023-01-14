import React from "react";
import Trusted from "../components/Trusted";

const Feature = () => {
  return (
    <>
    <div className="contactContainer maincontainer lr-pad martop">
      <div className="featureContainer">
        <div className="sectiontitle">
          <h1>
            Our <span className="span"> Services</span>
          </h1>
        </div>

        <div className="featurebox">
          <div className="feature common" data-aos="fade-up">
            <ion-icon name="shield-checkmark-outline"></ion-icon>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="feature">
            <div className="subfeature" data-aos="fade-up">
              <div className="subf">
                <ion-icon name="card-outline"></ion-icon>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="subfeature common" data-aos="fade-up">
              <div className="subf">
                <ion-icon name="earth-outline"></ion-icon>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
          <div className="feature common" data-aos="fade-up">
            <ion-icon name="megaphone-outline"></ion-icon>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </div>
    <Trusted/>
  </>
  );
};

export default Feature;
