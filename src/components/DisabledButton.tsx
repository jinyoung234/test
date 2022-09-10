interface OnAndOffProps {
  setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

function OnAndOffButton({ setDisabled }: OnAndOffProps): JSX.Element {
  const handleOnAndOff = (): void => {
    setDisabled((prev) => !prev);
  };
  return (
    <button data-testid='on-off-button' onClick={handleOnAndOff}>
      on-off
    </button>
  );
}

export default OnAndOffButton;
