import { Offcanvas, Stack } from 'react-bootstrap';

import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

import CartItem from './CartItem';
import storeItems from '../data/item.json';
import { useMemo } from 'react';

const Cart = () => {
  const { isOpen, cart, closeCart } = useCart();

  const totalPrice = useMemo(() => {
    const { total } = cart.reduce(
      (cartTotal, cartItem) => {
        const item = storeItems.find((item) => item.id === cartItem.id);
        const itemTotal = (item?.price ?? 0) * cartItem.quantity;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      { total: 0 }
    );

    return total;
  }, [cart]);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} store={storeItems} />;
          })}
          <div className='ms-auto fw-bold fs-5'>
            Total: {formatCurrency(totalPrice)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
