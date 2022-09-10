import { useState } from 'react';
import Button from './Button';
import Count from './Count';
import OnAndOffButton from './DisabledButton';

function Page(): JSX.Element {
  const [count, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <Count count={count} />
        <Button disabled={disabled} setCounter={setCounter} />
        <OnAndOffButton setDisabled={setDisabled} />
      </header>
    </div>
  );
}

export default Page;
