/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext } from 'react';
import {
  OrderContext,
  ProductsType,
} from '../../../utils/contexts/OrderContext';
import { IImageUrl } from './Products';

interface ProductDataProps {
  productData: IImageUrl[] | undefined;
}

function ProductData({ productData }: ProductDataProps): JSX.Element {
  const [orderObject, updateItemCount] = useContext(OrderContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const currentValue = e.currentTarget.value;
    const itemName = e.currentTarget.id;
    updateItemCount(itemName as ProductsType, +currentValue, 'products');
  };
  return (
    <div style={{ display: 'flex' }}>
      {productData?.map((img, i) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          key={i}
        >
          <img
            src={`http://localhost:5000/${img.imagePath}`}
            alt={`${img.name} product`}
            style={{ width: '70%' }}
          />
          <form style={{ marginTop: '10px' }}>
            <label htmlFor={img.name} style={{ textAlign: 'right' }}>
              {img.name}
            </label>
            <input
              id={img.name}
              style={{ marginLeft: 7 }}
              type='number'
              name='quantity'
              min='0'
              defaultValue={0}
              onChange={handleChange}
            />
          </form>
        </div>
      ))}
    </div>
  );
}

export default ProductData;
