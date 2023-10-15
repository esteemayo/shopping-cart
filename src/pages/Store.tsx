import { Col, Row } from 'react-bootstrap';

import storeItems from '../data/item.json';
import StoreItem from '../components/StoreItem';

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((item) => {
          return (
            <Col>
              <StoreItem key={item.id} {...item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Store;
