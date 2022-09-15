/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */

import React, { useContext } from 'react';
import {
  OptionsType,
  OrderContext,
} from '../../../utils/contexts/OrderContext';
import { IOptionData } from './Options';

interface OptionCheckBoxProps {
  optionData: IOptionData[];
}

function OptionCheckBox({ optionData }: OptionCheckBoxProps): JSX.Element {
  const [orderObject, updateItemCount] = useContext(OrderContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const idValue = e.currentTarget.id;
    const isCheck = e.currentTarget.checked;
    updateItemCount(idValue as OptionsType, isCheck ? 1 : 0, 'options');
  };
  return (
    <>
      {optionData?.map((option, i) => (
        <div key={i}>
          <form style={{ marginTop: '10px' }}>
            <label htmlFor={option.name} style={{ textAlign: 'right' }}>
              {option.name}
            </label>
            <input
              onChange={handleChange}
              id={option.name}
              style={{ marginLeft: 7 }}
              type='checkbox'
            />
          </form>
        </div>
      ))}
    </>
  );
}

export default OptionCheckBox;
