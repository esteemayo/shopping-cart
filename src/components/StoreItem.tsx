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
    </Card>
  );
};

export default StoreItem;
