/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import OrderComponent from '../../../components/OrderPage/OrderComponent';
import { server } from '../../../utils/mocks/server';
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
  test('image fetching error from server', async () => {
    server.resetHandlers(
      rest.get('http://localhost:5000/products', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(OrderComponent());
    const errorComponent = await screen.findByText(
      'network 에러가 발생했습니다.'
    );
    expect(errorComponent).toHaveTextContent('network 에러가 발생했습니다.');
  });
});
