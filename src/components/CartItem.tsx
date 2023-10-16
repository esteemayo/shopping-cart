import { FC } from 'react';
import { Button, Stack } from 'react-bootstrap';

import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

type StoreItemValues = {
  readonly id: number;
  name: string;
  price: number;
  imgUrl: string;
};

interface CartItemProps {
  readonly id: number;
  quantity: number;
  store: StoreItemValues[];
}

const CartItem: FC<CartItemProps> = ({ id, quantity, store }) => {
  const { removeFromCart } = useCart();
  const item = store.find((item) => item.id === id);

  if (!item) {
    return null;
  }

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img src={item.imgUrl} alt='' className='cart-img' />
      <div className='me-auto'>
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className='text-muted cart-quantity'>x{quantity}</span>
          )}
        </div>
        <div className='text-muted cart-price'>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant='outline-danger'
        size='sm'
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
