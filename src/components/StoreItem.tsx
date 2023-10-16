import { FC, useMemo } from 'react';
import { Button, Card } from 'react-bootstrap';

import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

interface StoreItemProps {
  readonly id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart();

  const quantity = useMemo(() => {
    return getItemQuantity(id);
  }, [getItemQuantity, id]);

  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={imgUrl} alt='' className='card-img' />
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100' onClick={() => increaseCartQuantity(id)}>
              + Add to cart
            </Button>
          ) : (
            <div
              className='d-flex flex-column align-items-center'
              style={{ gap: '0.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '0.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className='fs-3'>{quantity}</span> in cart
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant='danger'
                size='sm'
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
