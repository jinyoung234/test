import { render } from '@testing-library/react';
import { OrderContextProvider } from '../contexts/OrderContext';

const customRender = (ui: JSX.Element, options?: any): void => {
  render(ui, { wrapper: OrderContextProvider, ...options });
};

export * from '@testing-library/react';

export { customRender as render };
