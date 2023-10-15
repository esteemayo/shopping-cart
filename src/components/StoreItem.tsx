import { FC } from 'react';
import { Card } from 'react-bootstrap';

interface StoreItemProps {
  readonly id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  return (
    <Card>
      <Card.Img variant='top' src={imgUrl} alt='' className='card-img' />
      <Card.Body className='d-flex flxe-column'>
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
          <span className='fs-2'>{name}</span>
          <span className='ms-2 text-muted'>{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
