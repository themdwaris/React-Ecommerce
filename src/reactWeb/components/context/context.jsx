import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import svg1 from "../../images/svg1.svg";
import svg2 from "../../images/svg2.svg";
import reducer from "./reducer";

const AppContext = createContext();
const API = `https://dummyjson.com/products`;

const initialState = {
  fname: "",
  lname: "",
  image: "",
  title: "",
  toredirect: "",
  products: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const updateHome = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        fname: "Mohammad",
        lname: "Waris",
        image: svg2,
        title: "Get Started",
        toredirect: "/products",
      },
    });
  };
  const updateAbout = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        fname: "Mohammad",
        lname: "Waris",
        image: svg1,
        title: "Contact Us",
        toredirect: "/contact",
      },
    });
  };

  const getServices = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      dispatch({ type: "GET_SERVICES", payload: data.products });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const cleartime = setTimeout(() => {
      getServices(API);
    }, 800);
    return () => clearTimeout(cleartime);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, updateHome, updateAbout, loading, setLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useYourContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useYourContext };
