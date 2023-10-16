import { Offcanvas, Stack } from 'react-bootstrap';

import CartItem from './CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { isOpen, cart, closeCart } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
