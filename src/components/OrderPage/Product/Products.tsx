/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { fetchImage } from '../../../utils/api/OrderPage/api';
import ErrorMessage from '../Error/ErrorMessage';
import ProductData from './ProductData';

export interface IImageUrl {
  name: string;
  imagePath: string;
}

function Products(): JSX.Element {
  const [productData, setProductData] = useState<IImageUrl[]>();
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchImage()
      .then((res) => {
        setProductData([...res]);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <ErrorMessage message='network 에러가 발생했습니다.' />;
  }
  return (
    <div style={{ display: 'flex' }}>
      <ProductData productData={productData} />
    </div>
  );
}

export default Products;
