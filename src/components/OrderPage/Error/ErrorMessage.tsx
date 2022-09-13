interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps): JSX.Element {
  return <div>{message}</div>;
}

export default ErrorMessage;
