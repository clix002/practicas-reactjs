import { createContext, useReducer } from "react";

const CartContext = createContext();

// start localStorage
const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

// update localStorage
const updatedLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  if (actionType === "CLEAR_CART") {
    updatedLocalStorage([]);

    return [];
  }

  const { id } = actionPayload || {}; // Desestructuramos 'id' solo si 'actionPayload' está definido

  if (actionType === "ADD_TO_CART") {
    const productCartIndex = state.findIndex((item) => item.id === id);

    if (productCartIndex >= 0) {
      const newState = structuredClone(state);
      newState[productCartIndex].quantity += 1;
      // para localStorage
      updatedLocalStorage(newState);
      return newState;
    }

    // sin localStorage
    // return [
    //   ...state,
    //   {
    //     ...actionPayload, // Producto
    //     quantity: 1,
    //   },
    // ];

    const newState = [
      ...state,
      {
        ...actionPayload, // Producto
        quantity: 1,
      },
    ];
    updatedLocalStorage(newState);
    return newState;
  }

  if (actionType === "REMOVE_FROM_CART") {
    const newState = state.filter((item) => item.id !== id);
    updatedLocalStorage(newState);
    return newState;
  }

  return state;
};

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [state, dipath] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dipath({
      type: "ADD_TO_CART",
      payload: product,
    });

  const clearCart = () =>
    dipath({
      type: "CLEAR_CART",
    });
  const removeFromCart = (product) =>
    dipath({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearCart,
        removeFromCart,
        cart: state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
