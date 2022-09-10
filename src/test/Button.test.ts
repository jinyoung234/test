import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('button test', () => {
  // plus Button
  test('plus button text check', () => {
    render(App());
    const buttonElement = screen.getByTestId('plus-button');
    expect(buttonElement).toHaveTextContent('+');
  });
  test('count increase 1 after plus button click', () => {
    render(App());
    const plusButton = screen.getByTestId('plus-button');
    fireEvent.click(plusButton);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('1');
  });
  // minus Button
  test('minus button text check', () => {
    render(App());
    const buttonElement = screen.getByTestId('minus-button');
    expect(buttonElement).toHaveTextContent('-');
  });
  test('count decrease 1 after minus button click', () => {
    render(App());
    const minusButton = screen.getByTestId('minus-button');
    fireEvent.click(minusButton);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('-1');
  });
  // on-off button
  test('disabled +, - button after on-off button click', () => {
    render(App());
    const onOffButton = screen.getByTestId('on-off-button');
    fireEvent.click(onOffButton);
    const plusButton = screen.getByTestId('plus-button');
    const minusButton = screen.getByTestId('minus-button');
    expect(plusButton).toBeDisabled();
    expect(minusButton).toBeDisabled();
  });
});
