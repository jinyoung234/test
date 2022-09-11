/* eslint-disable import/prefer-default-export */
import { useState } from 'react';

export function useCheck(): (
  | boolean
  | ((e: React.ChangeEvent<HTMLInputElement>) => void)
)[] {
  const [checkState, setCheckState] = useState(false);
  const handleSetCheck = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCheckState(e.currentTarget.checked);
  };

  return [checkState, handleSetCheck];
}
