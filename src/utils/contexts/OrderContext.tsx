/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import { createContext, useEffect, useMemo, useState } from 'react';

export type ProductsType = 'America' | 'England' | 'Germany' | 'Portland';

export type OptionsType = 'Insurance' | 'Dinner' | 'FirstClass';

export interface ITotals {
  products: number;
  options: number;
  total: number;
}

interface IOrderCounts {
  products: Map<ProductsType, number>;
  options: Map<OptionsType, number>;
}

export type OrderContextProvider = [
  {
    products: Map<ProductsType, number>;
    options: Map<OptionsType, number>;
    totals: ITotals;
  },
  (
    itemName: ProductsType | OptionsType,
    newItemCount: number,
    orderType: 'products' | 'options'
  ) => void
];

const pricePerItem = {
  products: 1000,
  options: 500,
};

function calculateSubtotal(
  orderType: 'products' | 'options',
  orderCounts: IOrderCounts
): number {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }
  return optionCount * pricePerItem[orderType];
}

export const OrderContext = createContext<OrderContextProvider>(
  [] as unknown as OrderContextProvider
);

export function OrderContextProvider(props: any): JSX.Element {
  const [orderCounts, setOrderCounts] = useState<any>({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState<ITotals>({
    products: 0,
    options: 0,
    total: 0,
  });

  useEffect(() => {
    const productsTotal = calculateSubtotal('products', orderCounts);
    const optionsTotal = calculateSubtotal('options', orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total,
    });
  }, [orderCounts]);

  const value = useMemo(() => {
    function updateItemCount(
      itemName: ProductsType | OptionsType,
      newItemCount: number,
      orderType: 'products' | 'options'
    ): void {
      const newOrderCounts = { ...orderCounts };

      const orderCountsMap = orderCounts[orderType];
      if (orderType === 'products') {
        orderCountsMap.set(itemName as ProductsType, newItemCount);
      } else if (orderType === 'options') {
        orderCountsMap.set(itemName as OptionsType, newItemCount);
      }
      console.log(orderCountsMap);

      setOrderCounts(newOrderCounts);
    }

    return [{ ...orderCounts, totals }, updateItemCount];
  }, [orderCounts, totals]);

  return <OrderContext.Provider value={value} {...props} />;
}
