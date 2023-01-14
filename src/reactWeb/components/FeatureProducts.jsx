import React from "react";
import { NavLink } from "react-router-dom";
import { useYourContext } from "./context/context";
import spinner from "../images/spinner.svg";
import PriceFormat from "./PriceFormat";

const FeatureProducts = () => {
  const { products,loading } = useYourContext();

  if (loading) {
    return (
      <div className="loading">
        <p>
          <img src={spinner} alt="load" />
        </p>
      </div>
    );
  }
  const filteredProducts = products.filter((currElem) => {
    return currElem.category === "laptops";
  });
  
  return (
    <div className="contactContainer maincontainer lr-pad featuredContainer">
      <div className="featured">
        <p>Chcek Now!</p>
        <h2>Our featured <span>products</span></h2>
      </div>
      <div className="servicebox">
        {filteredProducts.map((currItem)=>{
            // const {id,thumbnail,price,title,brand} = 
            const {id, category, description, price, thumbnail, title } =
            currItem;
          // console.log(currElem);
          const substr = description.substring(0, 40);
          const goTo = () => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          };
            return(
                <NavLink to={`/viewpage/${id}`} key={id} onClick={goTo} data-aos="fade-left">
                <div className="sbox">
              <div className="thumbnail">
                <img src={thumbnail} alt="" />
              </div>
              <div className="productText">
                <span className="category text ptext">{category}</span>
                <h2 className="productTitle ptext">{title}</h2>
                <p className="desc text ptext">
                  {description.length <= substr
                    ? `${description}`
                    : `${substr}...`}
                </p>
                <p className="price ptext">
                <span>{<PriceFormat price={price}/>}</span>
                </p>
              </div>
            </div>
            </NavLink>
            )
        })}
      </div>
    </div>
  );
};

export default FeatureProducts;
