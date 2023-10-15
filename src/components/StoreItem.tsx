import { FC } from 'react';

interface StoreItemProps {
  readonly id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  return <div>StoreItem</div>;
};

export default StoreItem;
