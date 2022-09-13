interface OrderProps {
  type: string;
}

function Order({ type }: OrderProps): JSX.Element {
  return (
    <>
      <h2>{type}</h2>
      <p>하나의 가격</p>
      <p>총 가격</p>
    </>
  );
}

export default Order;
