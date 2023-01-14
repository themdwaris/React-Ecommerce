import React from "react";
import { NavLink } from "react-router-dom";
import { useYourContext } from "../components/context/context";
import { useFilterContext } from "../components/context/FilterContext";
import PriceFormat from "../components/PriceFormat";
import spinner from "../images/spinner.svg";
import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
  const { loading } = useYourContext();
  const {
    filterProducts,
    allProducts,
    filterData: { text, category,maxPrice,price,minPrice },
    getFilterData,clearFilters
  } = useFilterContext();
  // console.log(filterProducts);

  if (loading) {
    return (
      <div className="loading">
        <p>
          <img src={spinner} alt="load" />
        </p>
      </div>
    );
  }
  const getUniqueData = (data, property) => {
    const uniqueValue = data.map((currItem) => {
      return currItem[property];
    });
    return ["All", ...new Set(uniqueValue)];
  };
  
  const categoryvalue = getUniqueData(allProducts, "category");

  return (
    <>
      <div className="serviceContainer maincontainer lr-pad martop">
        <div className="sectiontitle">
          <h1>
            Our <span className="span">Products</span>
          </h1>
        </div>

        <div className="mainproductview">
          <div className="leftsort">
            <div className="productcategory">
              <h4>Category:</h4>
              {categoryvalue.map((currValue, index) => {
                return (
                  <button
                    key={index}
                    className={currValue === category ? "btnactive" : ""}
                    type="button"
                    name="category"
                    value={currValue}
                    onClick={getFilterData}
                  >
                    {currValue}
                  </button>
                );
              })}
            </div>
            <div className="companysort">
              <form action="#">
                <label htmlFor="company">Company: </label>
                <select name="company" id="company" onClick={getFilterData}>
                  <option value="All">All</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Infinix">Infinix</option>
                  <option value="OPPO">Oppo</option>
                  <option value="Microsoft Surface">Microsoft</option>
                  <option value="HP Pavilion">HP Pavillion</option>
                </select>
              </form>
            </div>
            <div className="pricesort">
              <h4>Price:</h4>
              <div className="slidecontainer">
                <p><PriceFormat price={price}/></p>
                <input
                  type="range"
                  name="price"
                  min={minPrice}
                  max={maxPrice}
                  value={price}
                  // className="slider"
                  // id="myRange"
                  onChange={getFilterData}
                />
              </div>
            </div>
            <div className="clearFilters">
              <button className="btn" onClick={clearFilters}>Clear Filters</button>
            </div>
          </div>
          <div className="rightsort">
            <div className="topsort">
              <form onSubmit={(e) => e.preventDefault()} className="searchbox">
                <input
                  type="search"
                  placeholder="Search"
                  name="text"
                  value={text}
                  onChange={getFilterData}
                  autoComplete="off"
                />
                <AiOutlineSearch className="prosericon" />
              </form>
              <div className="topright">
                <div>
                  <p>Total {filterProducts.length} Products</p>
                </div>

                <div className="alphasort">
                  <form action="#">
                    <label htmlFor="sort"></label>
                    <select name="category" id="category" onClick={getFilterData}>
                      <option value="All">All</option>
                      <option value="smartphones">Mobiles</option>
                      <option value="laptops">Laptops</option>
                      <option value="groceries">Groceries</option>
                      <option value="fragrances">Fragrances</option>
                      <option value="skincare">Skin Care</option>
                      <option value="home-decoration">Decoration</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            <div className="productview">
              <div className="servicebox">
                {filterProducts.map((currElem) => {
                  const { id, category, description, price, thumbnail, title } =
                    currElem;
                  // console.log(currElem)

                  const substr = description.slice(0, 40);
                  const goTo = () => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  };
                  return (
                    <NavLink to={`/viewpage/${id}`} key={id} onClick={goTo}>
                      <div className="sbox" data-aos="fade-up">
                        <div className="thumbnail">
                          <img src={thumbnail} alt="" />
                        </div>
                        <div className="productText">
                          <span className="category text ptext">
                            {category}
                          </span>
                          <h2 className="productTitle ptext">{title}</h2>
                          <p className="desc text ptext">{substr}...</p>
                          <p className="price ptext">
                            <span>{<PriceFormat price={price} />}</span>
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
