import React from "react";
import Index from "./reactWeb/Pages/Index";
import { AppProvider } from "./reactWeb/components/context/context";
import { FilterContextProvider } from "./reactWeb/components/context/FilterContext";
import { CartProvider } from "./reactWeb/components/context/cartContext";

const App = () => {
  return (
    <>
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <Index />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </>
  );
};

export default App;
