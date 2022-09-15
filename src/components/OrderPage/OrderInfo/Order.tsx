/* eslint-disable guard-for-in */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from 'react';
import { ITotals, OrderContext } from '../../../utils/contexts/OrderContext';
import ErrorMessage from '../Error/ErrorMessage';

interface OrderProps {
  isProduct: boolean;
  type: string;
}

function Order({ isProduct, type }: OrderProps): JSX.Element {
  const orderObject = useContext(OrderContext);
  const ProductTotal = orderObject[0]?.totals;
  let productCount = 0;
  let optionCount = 0;
  for (const count of orderObject[0]?.products.values()) {
    productCount += Number(count);
  }

  for (const count of orderObject[0]?.options.values()) {
    optionCount += Number(count);
  }
  console.log(productCount, optionCount);
  return (
    <>
      <h2>{type}</h2>
      {isProduct ? (
        <p>
          하나의 가격 :
          {Number.isNaN(ProductTotal?.products / productCount)
            ? 0
            : ProductTotal?.products / productCount}
        </p>
      ) : (
        <p>
          하나의 가격 :{' '}
          {Number.isNaN(ProductTotal?.options / optionCount)
            ? 0
            : ProductTotal?.options / optionCount}
        </p>
      )}
      {isProduct ? (
        <p>총 가격 : {ProductTotal?.products}</p>
      ) : (
        <p>총 가격 : {ProductTotal?.options}</p>
      )}
    </>
  );
}

export default Order;
