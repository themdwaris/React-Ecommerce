import React from "react";
import AddProduct from "./AddCart";
import { MdDeleteOutline } from "react-icons/md";
import PriceFormat from "./PriceFormat";
import { useCartContext } from "./context/cartContext";

const CartItem = (currItem) => {
  
    const {brand,id,thumbnail, price, title, quantity } = currItem
    const {delItem} = useCartContext()
    // console.log(title.length)
  return (

    <div className="cartBox">
      <div className="item">
        <img src={thumbnail} />
        <div className="titleBrand">
          <p>{title.length>13? `${title.slice(0,13)}...`:title}</p>
          <p className="itemBrand">{brand}</p>
        </div>
      </div>
      <div className="itemPrice hidePrice">
      <p><PriceFormat price={price}/></p>
      </div>
      <div className="itemQuantity">
        <AddProduct quantity={quantity} />
      </div>
      <div className="itemSubTotal hidePrice">
        <p><PriceFormat price={price*quantity}/></p>
      </div>
      <div className="itemRemove">
        <MdDeleteOutline className="delIcon"onClick={()=>delItem(id)}/>
      </div>
    </div>
  );
};

export default CartItem;
