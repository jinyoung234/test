import Options from './Options/Options';
import OrderInfo from './OrderInfo/OrderInfo';
import Products from './Product/Products';
import Total from './Total';

function OrderComponent(): JSX.Element {
  return (
    <div style={{ padding: '50px 50px ' }}>
      <OrderInfo />
      <Products />
      <div style={{ display: 'flex', marginTop: '30px' }}>
        <Options />
        <Total />
      </div>
    </div>
  );
}

export default OrderComponent;
