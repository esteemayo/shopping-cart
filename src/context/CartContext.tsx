import { FC, ReactNode, createContext, useContext, useState } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextProps {
  getItemQuantity(id: number): number;
  increaseCartQuantity(id: number): void;
  decreaseCartQuantity(id: number): void;
  removeFromCart(id: number): void;
}

const CartContext = createContext({} as CartContextProps);

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const getItemQuantity = (id: number): number => {
    return cart.find((cartItem) => cartItem.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCart((currItems) => {
      if (currItems.find((cartItem) => cartItem.id === id) === undefined) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        currItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCart((currItems) => {
      if (currItems.find((cartItem) => cartItem.id === id)?.quantity === 1) {
        currItems.filter((cartItem) => cartItem.id !== id);
      } else {
        currItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((currItems) => {
      return currItems.filter((cartItem) => cartItem.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider };
