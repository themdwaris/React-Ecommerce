import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useYourContext } from "../components/context/context";
import Service from "./Service";
import spinner from "../images/spinner.svg";
import { BsFillCartCheckFill } from "react-icons/bs";
import PriceFormat from "../components/PriceFormat";
import RatingStar from "../components/RatingStar";
import AddProduct from "../components/AddCart";
import { useCartContext } from "../components/context/cartContext";
// import { useFilterContext } from "../components/context/FilterContext";

const ViewPage = () => {
  const API = `https://dummyjson.com/products`;
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const { loading, setLoading } = useYourContext();
  const [currImg, setImg] = useState("");
  const [imgClick, setImgClick] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  const getProducts = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(product);

  useEffect(() => {
    // getItem()
    const clearTime = setTimeout(() => {
      getProducts(`${API}/${id}`);
    }, 600);
    return () => clearTimeout(clearTime);
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <p>
          <img src={spinner} alt="load" />
        </p>
      </div>
    );
  }
  const {
    brand,
    category,
    description,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = product;

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };
  const setIncrease = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };
  const goTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  // console.log(product)
  return (
    <>
      <div className="viewContainer maincontainer lr-pad martop">
        <div className="ptitle">
          <h1>Product</h1>
        </div>
        <div className="cardContainer">
          <div className="left card">
            <div className="thumbnail" data-aos="fade-up">
              {imgClick ? (
                <img src={currImg} alt="product" />
              ) : (
                <img src={thumbnail} alt="product" />
              )}
            </div>
            <div className="cardImages" data-aos="fade-up">
              {images?.map((img, index) => {
                return (
                  <div
                    className="imgs"
                    key={index}
                    onClick={() => {
                      setImg(img);
                      setImgClick(true);
                    }}
                  >
                    <img src={img} alt="img" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right card" data-aos="fade-up">
            <div className="cardContent">
              <span className="brand text">{brand}</span>
              <h1 className="cardTitle">{title}</h1>
              <span className="cardRating text">
                <RatingStar rating={rating} reviews={"Reviews"} />
              </span>
              <span className="cardStock text">
                Stock: {stock >= 1 ? "In Stock" : "Out of stock"}
              </span>
              <span className="cardStock text">Category: {category}</span>
              <h4>
                MRP:{" "}
                <span className="mrp">
                  {<PriceFormat price={price + 2000} />}
                </span>
              </h4>
              <h3>{<PriceFormat price={price} />}</h3>

              <p className="cardDesc">
                {description}
                <br></br>Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dignissimos nam ducimus nostrum at minus placeat facilis
                iste obcaecati explicabo architecto. Eos excepturi beatae
                impedit quisquam ipsam distinctio ipsa voluptates! Minus.
              </p>
              <p className="cardFeature cardDesc">
                <span>Features: </span>
                {description}
              </p>
            </div>
            {stock > 0 && (
              <AddProduct
                className="cart"
                quantity={quantity}
                setDecrease={setDecrease}
                setIncrease={setIncrease}
              />
            )}
            <NavLink
              className="cart"
              to="/cart"
              onClick={() => {
                addToCart(quantity, product);
                goTo();
              }}
            >
              Add to Cart <BsFillCartCheckFill className="checkcart" />
            </NavLink>
            <NavLink to="/products" className="cart back">
              Back
            </NavLink>
          </div>
        </div>
      </div>
      <Service />
    </>
  );
};

export default ViewPage;
