import { useContext } from 'react';
import { OrderContext } from '../../utils/contexts/OrderContext';

function Total(): JSX.Element {
  const orderObject = useContext(OrderContext);
  const totalPrice = orderObject[0]?.totals;
  return (
    <div style={{ width: '50%' }}>
      <h2 style={{ marginBottom: '40px' }}>
        Total Price : {totalPrice?.total}
      </h2>
      <button>주문</button>
    </div>
  );
}

export default Total;
