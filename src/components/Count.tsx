interface CountProps {
  count: number;
}

function Count({ count }: CountProps): JSX.Element {
  return <button data-testid='counter'>{count}</button>;
}

export default Count;
