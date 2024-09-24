'use client';

import { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const Provider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  return (
    <LayoutContext.Provider
      value={{ setCartItem, cartItem }}
      className="min-h-screen"
    >
      {children}
    </LayoutContext.Provider>
  );
};

export default Provider;
