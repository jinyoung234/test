import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderComponent from '../../../components/OrderPage/OrderComponent';
import { server } from '../../../utils/mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.restoreHandlers());
afterAll(() => server.close());

describe('Product component test', () => {
  test('check rendering image from server', async () => {
    render(OrderComponent());
    const productImages = await screen.findAllByRole('img', {
      name: /product/i,
    });
    expect(productImages).toHaveLength(2);
  });
});
