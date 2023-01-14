import React from "react";
import { useCartContext } from "../components/context/cartContext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import PriceFormat from "../components/PriceFormat";

const Cart = () => {
  const { cart,clearCart,shippingFee} = useCartContext();
  // console.log(cart)
  let subT=0;
  let ttl=0;

  if(cart.length===0){
    return <div className="emptycart"><h1>No item in cart</h1></div>
  }
  return (
    <div className="viewContainer maincontainer lr-pad martop">
      <div className="cartContainer">
        <div className="cartheading">
          <p className="itemheading">Item</p>
          <p className="itemheading hidePrice">Price</p>
          <p className="itemheading">Quantity</p>
          <p className="itemheading hidePrice">SubTotal</p>
          <p className="itemheading">Remove</p>
        </div>
        <div className="cartgrid">
          {cart.map((currItem, index) => {
            subT = subT+(currItem.price*currItem.quantity)
            return <CartItem key={index} {...currItem} />;
          })}
        </div>
        <div className="cartbtn">
          <div className="continue cbtn">
            <NavLink to="/products">Continue</NavLink>
          </div>
          <div className="cbtn clear">
            <NavLink onClick={clearCart}>Clear Cart</NavLink>
          </div>
        </div>

        <div className="total">
          <div className="subtotal">
            <p><span className="sub">SubTotal</span> <span className="subt amt"></span><PriceFormat price={subT}/></p>
            <p><span className="sub">Shipping Fee</span> <span className="fee amt"></span><PriceFormat price={shippingFee}/></p>
            <hr />
            <p><span className="sub">Order Total</span> <span className="amt"></span><PriceFormat price={ttl =(subT+shippingFee/2)}/></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
