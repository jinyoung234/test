/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */

import { IOptionData } from './Options';

interface OptionCheckBoxProps {
  optionData: IOptionData[];
}

function OptionCheckBox({ optionData }: OptionCheckBoxProps): JSX.Element {
  return (
    <>
      {optionData?.map((option, i) => (
        <div key={i}>
          <form style={{ marginTop: '10px' }}>
            <label htmlFor={option.name} style={{ textAlign: 'right' }}>
              {option.name}
            </label>
            <input id={option.name} style={{ marginLeft: 7 }} type='checkbox' />
          </form>
        </div>
      ))}
    </>
  );
}

export default OptionCheckBox;
