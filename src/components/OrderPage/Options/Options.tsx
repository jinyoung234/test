/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { fetchOptions } from '../../../utils/api/OrderPage/api';
import ErrorMessage from '../Error/ErrorMessage';
import Order from '../OrderInfo/Order';
import OptionCheckBox from './OptionCheckBox';

export interface IOptionData {
  name: string;
}

function Options(): JSX.Element {
  const [optionData, setOptionData] = useState<IOptionData[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchOptions()
      .then((res) => {
        setOptionData([...res]);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  if (error) {
    return <ErrorMessage message='network 에러가 발생했습니다.' />;
  }
  return (
    <div
      style={{
        width: '50%',
      }}
    >
      <Order type='Options' />
      <OptionCheckBox optionData={optionData} />
    </div>
  );
}

export default Options;
