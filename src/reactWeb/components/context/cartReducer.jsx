const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { quantity, product } = action.payload;
    // console.log(product)

    const repeated = state.cart.find((currItem) => {
      return currItem.id === product.id + product.stock;
    });

    if (repeated) {
      const updatedItem = state.cart.map((currItem) => {
        if (currItem.id === product.id + product.stock) {
          let newQuantity = currItem.quantity + quantity;
          if (newQuantity >= currItem.stock) {
            newQuantity = currItem.stock;
          }
          return {
            ...currItem,
            quantity: newQuantity,
          };
        } else {
          return currItem;
        }
      });
      return {
        ...state,
        cart: updatedItem,
      };
    } else {
      let cartProduct = {
        brand: product.brand,
        id: product.id + product.stock,
        thumbnail: product.thumbnail,
        price: product.price,
        title: product.title,
        quantity: quantity,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "DEL_ITEM") {
    let updatedItem = state.cart.filter((currItem) => {
      return currItem.id !== action.payload;
    });

    return {
      ...state,
      cart: updatedItem,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "TOTAL_CART_ITEM") {
    let updatedcart = state.cart.reduce((accum, currItem) => {
      let { quantity } = currItem;
      accum = accum + quantity;
      return accum;
    }, 0);
    return {
      ...state,
      totalItem: updatedcart,
    };
  }
};

export default cartReducer;
