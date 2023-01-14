import React from "react";
import { FaGooglePay } from "react-icons/fa";
import { FaEbay } from "react-icons/fa";
import { FaAdversal } from "react-icons/fa";
import { FaAviato } from "react-icons/fa";
import { FaApper } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
// import { CiSaveDown1 } from "react-icons/ci";


const Trusted = () => {
  return (
    <>
      <div className="contactContainer maincontainer lr-pad">
        <div className="trusted">
          <p>
            <strong>Trusted</strong> Company work with us.
          </p>
          <div className="trustedbox">
            <div className="ticon" data-aos="fade-up">
              <FaGooglePay className="companyicon gpay" />
            </div>
            <div className="ticon" data-aos="fade-up">
              <FaEbay className="companyicon ebay" />
            </div>
            <div className="ticon" data-aos="fade-up">
              <FaAdversal className="companyicon ad" />
            </div>
            <div className="ticon" data-aos="fade-up">
              <FaAviato className="companyicon avi" />
            </div>
            <div className="ticon" data-aos="fade-up">
              <FaApper className="companyicon apper" />
            </div>
            <div className="ticon" data-aos="fade-up">
              <FaCcVisa className="companyicon visa" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Trusted;
