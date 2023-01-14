import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const RatingStar = ({rating,reviews}) => {
  const ratingStar = Array.from({ length: 5 }, (currElem, index) => {
    let num = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1
          ? <FaStar className="starIcon"/>
          : num >= rating
          ? <FaStarHalfAlt className="starIcon"/>
          : <FaRegStar className="starIcon"/>}
      </span>
    );
  });

  return <div><span>{ratingStar} ({rating} {reviews})</span></div>;
};

export default RatingStar;
