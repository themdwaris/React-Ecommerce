import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const AddProduct = ({quantity,setIncrease,setDecrease }) => {

  return (
    <div className="setQuantity">
      <button onClick={setDecrease}> <AiOutlineMinus className="pm"/> </button>
      <span>{quantity}</span>
      <button onClick={setIncrease}> <AiOutlinePlus className="pm"/> </button>
    </div>
  );
};

export default AddProduct;
