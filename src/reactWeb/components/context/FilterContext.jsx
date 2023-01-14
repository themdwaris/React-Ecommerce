import { createContext, useContext, useEffect, useReducer } from "react";
import { useYourContext } from "./context";
import reducer from './filterReducer';

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  filterData: {
    text: "",
    category: "All",
    company: "All",
    price:0,
    maxPrice:0,
    minPrice:0
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useYourContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const getFilterData = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    return dispatch({
      type: "GET_FILTERED_DATA",
      payload: { name, value },
    });
  };

  const clearFilters = () =>{
    dispatch({type:'CLEAR_FILTERS'})
  }


  useEffect(() => {
    dispatch({ type: "GET_FILTER_PRODUCTS" });
  }, [state.filterData]);

  useEffect(() => {
    dispatch({ type: "LOAD-FILTER-DATA", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, getFilterData,clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

// export { FilterContextProvider, FilterContext, useFilterContext };
