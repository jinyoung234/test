import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('test1', () => {
  it('test App component initialize value', () => {
    render(App());
    const h3Element = screen.getByTestId('counter');
    expect(h3Element).toHaveTextContent('0');
  });
});
