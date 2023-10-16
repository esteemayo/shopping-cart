import { FC } from 'react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  readonly id: number;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useCart();
  return <div>CartItem</div>;
};

export default CartItem;
