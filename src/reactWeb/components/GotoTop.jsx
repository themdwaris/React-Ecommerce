import React from "react";
import { useEffect } from "react";

const GotoTop = () => {
  const toScroll = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    let goto = document.querySelector(".topContainer");
    // let goto = document.getElementById('goto');
    let humburger = document.querySelector(".menutext");
    // let menu = document.querySelector(".span");
    if (winScroll > height) {
      goto.style.display = "block";
      humburger.classList.add("sticky");
     
      
    } else {
      goto.style.display = "none";
      humburger.classList.remove("sticky");
    }
  };
  const goTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toScroll);
    return () => window.removeEventListener("scroll", toScroll);
  }, []);

  return (
    <>
      <div id='goto'className="topContainer" onClick={goTo}>
        <div className="topICon rotate">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </div>
      </div>
    </>
  );
};
export default GotoTop;
