import { Offcanvas } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { isOpen, closeCart } = useCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default Cart;
