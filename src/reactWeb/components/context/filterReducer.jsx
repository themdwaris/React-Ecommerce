const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD-FILTER-DATA":
      const allPrice = action.payload.map((currItem) => currItem.price);
      let maxPrice = Math.max(...allPrice);
      // console.log(maxPrice)

      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filterData: {
          ...state.filterData,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };

    case "GET_FILTERED_DATA":
      const { name, value } = action.payload;
      return {
        ...state,
        filterData: {
          ...state.filterData,
          [name]: value,
        },
      };

    case "GET_FILTER_PRODUCTS":
      const { allProducts } = state;
      let tempProducts = [...allProducts];

      const { text, category, company, price } = state.filterData;

      if (text) {
        tempProducts = tempProducts.filter((currItem) => {
          return currItem.title.toLowerCase().includes(text);
        });
      }
      if (category) {
        tempProducts = tempProducts.filter((currItem) => {
          if (category === "All") {
            return currItem;
          }
          return currItem.category === category;
        });
      }
      if (company) {
        tempProducts = tempProducts.filter((currItem) => {
          if (company === "All") {
            return currItem;
          }
          return currItem.brand === company;
        });
      }
      if (price) {
        tempProducts = tempProducts.filter((currItem) => {
          return currItem.price <= price;
        });
      }

      return {
        ...state,
        filterProducts: tempProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filterData: {
          ...state.filterData,
          text: "",
          category: "All",
          company: "All",
          price: state.filterData.maxPrice,
          maxPrice: state.filterData.maxPrice,
          minPrice: 0,
        },
      };


    default:
      return state;
  }
};
export default filterReducer;
