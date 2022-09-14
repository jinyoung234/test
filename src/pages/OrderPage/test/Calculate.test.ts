/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OrderComponent from '../../../components/OrderPage/OrderComponent';
import { mockServer } from '../../../utils/mocks/setUpTest';

describe('calculate test', () => {
  mockServer();
  test('update products total when products change', async () => {
    render(OrderComponent());

    const totals = screen.getAllByText('총 가격', { exact: false });
    const productsTotal = totals[0];
    expect(productsTotal).toHaveTextContent('총 가격');

    const americaInput = await screen.findByRole('spinbutton', {
      name: 'America',
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, '1');
    expect(productsTotal).toHaveTextContent('총 가격 : 1000');

    const englandInput = await screen.findByRole('spinbutton', {
      name: 'England',
    });

    userEvent.clear(englandInput);
    userEvent.type(englandInput, '3');
    expect(productsTotal).toHaveTextContent('총 가격 : 4000');
  });
});
