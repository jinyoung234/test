/* eslint-disable jsx-a11y/label-has-associated-control */
interface ButtonProps {
  checkState: boolean;
}

function Button({ checkState }: ButtonProps): JSX.Element {
  return (
    <div>
      <button disabled={!checkState} style={{ width: '10%' }}>
        주문 확인
      </button>
    </div>
  );
}

export default Button;
