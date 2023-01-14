import React from "react";
import { NavLink } from "react-router-dom";
const Button = ({data}) => {
  return (
    <div className="getbtn btn">
      <NavLink to={data.toredirect}>{data.title}</NavLink>
    </div>
  );
};

export default Button;
