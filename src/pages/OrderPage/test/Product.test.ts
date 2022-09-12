/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import OrderComponent from '../../../components/OrderPage/OrderComponent';
import { mockServer } from '../../../utils/mocks/setUpTest';

describe('Product component test', () => {
  mockServer();
  test('check rendering image from server', async () => {
    render(OrderComponent());
    const productImages = await screen.findAllByRole('img', {
      name: /product/i,
    });
    expect(productImages).toHaveLength(2);
  });
});
