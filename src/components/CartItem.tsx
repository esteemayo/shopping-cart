import { FC } from 'react';
import { Stack } from 'react-bootstrap';

import storeItems from '../data/item.json';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  readonly id: number;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useCart();
  const item = storeItems.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return (
    <Stack>
      <img src={item.imgUrl} alt='' className='cart-img' />
    </Stack>
  );
};

export default CartItem;
