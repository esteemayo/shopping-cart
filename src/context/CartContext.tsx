import { FC, ReactNode, createContext, useContext } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

const INITIAL_STATE = {
  cart: [],
  quantity: 0,
  total: 0,
};

const CartContext = createContext(INITIAL_STATE);

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  return (
    <CartContext.Provider value={{ cart, quantity, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider };
