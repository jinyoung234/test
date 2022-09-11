/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable global-require */
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { fetchImage } from '../../utils/api/OrderPage/api';

export interface IImageUrl {
  name: string;
  imagePath: string;
}

function Products(): JSX.Element {
  const [productData, setProductData] = useState<IImageUrl[]>();
  useEffect(() => {
    fetchImage()
      .then((res) => {
        setProductData([...res]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <h1>Products</h1>
        <h4>₩1,000</h4>
        <h4>Products total: ₩0</h4>
      </div>
      <div>
        {productData?.map((img, i) => (
          <div key={i}>
            <img
              // src={`http://localhost:5000/${img.imagePath}`}
              alt={`${img.name} product`}
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
              />
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
