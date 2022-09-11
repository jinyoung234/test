import { useCheck } from '../../../hooks/useCheck';
import Button from './Button';
import CheckBox from './CheckBox';

function SummaryComponent(): JSX.Element {
  const [checkState, handleSetCheck] = useCheck();
  return (
    <div>
      <h1>주문 확인</h1>
      <h3>Products : ₩1,000</h3>
      <ul>
        <li>1 England</li>
      </ul>
      <CheckBox
        checkState={checkState as boolean}
        handleSetCheck={
          handleSetCheck as (e: React.ChangeEvent<HTMLInputElement>) => void
        }
      />
      <Button checkState={checkState as boolean} />
    </div>
  );
}

export default SummaryComponent;
