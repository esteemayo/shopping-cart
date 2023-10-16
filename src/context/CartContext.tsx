import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import Cart from '../components/Cart';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface CartProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextProps {
  openCart(): void;
  closeCart(): void;
  getItemQuantity(id: number): number;
  increaseCartQuantity(id: number): void;
  decreaseCartQuantity(id: number): void;
  removeFromCart(id: number): void;
  cartQuantity: number;
  cart: CartItem[];
}

const CartContext = createContext({} as CartContextProps);

const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useLocalStorage<CartItem[]>('shopping-cart', []);

  const cartQuantity = cart.reduce(
    (cartTotal, cartItem) => (cartTotal += cartItem.quantity),
    0
  );

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const getItemQuantity = useCallback(
    (id: number): number => {
      return cart.find((cartItem) => cartItem.id === id)?.quantity || 0;
    },
    [cart]
  );

  const increaseCartQuantity = useCallback(
    (id: number) => {
      setCart((currItems) => {
        if (currItems.find((cartItem) => cartItem.id === id) === undefined) {
          return [...currItems, { id, quantity: 1 }];
        } else {
          return currItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        }
      });
    },
    [setCart]
  );

  const decreaseCartQuantity = useCallback(
    (id: number) => {
      setCart((currItems) => {
        if (currItems.find((cartItem) => cartItem.id === id)?.quantity === 1) {
          return currItems.filter((cartItem) => cartItem.id !== id);
        } else {
          return currItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        }
      });
    },
    [setCart]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      setCart((currItems) => {
        return currItems.filter((cartItem) => cartItem.id !== id);
      });
    },
    [setCart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
      }}
    >
      {children}
      <Cart isOpen={isOpen} />
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider };
