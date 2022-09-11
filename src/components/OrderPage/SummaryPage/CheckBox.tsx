/* eslint-disable jsx-a11y/label-has-associated-control */
interface CheckBoxProps {
  checkState: boolean;
  handleSetCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckBox({ checkState, handleSetCheck }: CheckBoxProps): JSX.Element {
  return (
    <>
      <input
        checked={checkState}
        id='confirm-checkbox'
        type='checkbox'
        onChange={handleSetCheck}
      />
      <label htmlFor='confirm-checkbox'>주문하려는 것을 확인하셨나요?</label>
    </>
  );
}

export default CheckBox;
