import Order from './Order';

interface OrderInfoProps {
  type: string;
}

function OrderInfo({ type }: OrderInfoProps): JSX.Element {
  return (
    <div>
      <h1>Travel Products</h1>
      <Order type={type} />
    </div>
  );
}

export default OrderInfo;
