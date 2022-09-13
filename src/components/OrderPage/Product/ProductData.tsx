/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
import { IImageUrl } from './Products';

interface ProductDataProps {
  productData: IImageUrl[] | undefined;
}

function ProductData({ productData }: ProductDataProps): JSX.Element {
  return (
    <>
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
            />
          </form>
        </div>
      ))}
    </>
  );
}

export default ProductData;
