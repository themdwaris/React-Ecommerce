import React from "react";
import contact from "../images/contact.svg";
// import Feature from "./Feature";

const Contact = () => {
  return (
    <>
      <div className="contactContainer martop maincontainer lr-pad">
        <div className="sectiontitle">
          <h1>
            Contact <span className="span">Us</span>
          </h1>
        </div>
        <div className="contactForm">
          <div className="formimg rotate" data-aos="fade-up">
            <img src={contact} alt="" />
          </div>
          <div className="form" data-aos="fade-up">
            <form action="https://formspree.io/f/xdovndzr" method="POST" >
              <input
                type="text"
                placeholder="Name"
                name="Username"
                autoComplete="off"
                required
              />
              <br></br>
              <input
                type="email"
                placeholder="Email"
                name="Email"
                autoComplete="off"
                required
              />
              <br></br>
              <textarea cols="10" rows="5" placeholder="Message" name="Message" autoComplete="off"></textarea>
              <br></br>
              <div className="fbtn">
              <input type='submit' value='Send'/>
              </div>
            </form>
            
            
          </div>
        </div>
        <div className="map" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.5226978618402!2d83.37966261484925!3d26.759603483193786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991459ed68255cd%3A0x63c57c1fce02e62!2sGorakhpur%20Railway%20Station!5e0!3m2!1sen!2sin!4v1671616893108!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
