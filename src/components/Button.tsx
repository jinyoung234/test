/* eslint-disable react/button-has-type */
interface ButtonProps {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  disabled: boolean;
}

function Button({ setCounter, disabled }: ButtonProps): JSX.Element {
  return (
    <div>
      <button
        data-testid='minus-button'
        onClick={() => setCounter((prevValue) => prevValue - 1)}
        disabled={disabled}
      >
        -
      </button>
      <button
        data-testid='plus-button'
        onClick={() => setCounter((prevValue) => prevValue + 1)}
        disabled={disabled}
      >
        +
      </button>
    </div>
  );
}

export default Button;
