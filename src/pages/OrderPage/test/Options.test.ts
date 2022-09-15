/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '../../../utils/test/customRender';
import OrderComponent from '../../../components/OrderPage/OrderComponent';
import { mockServer } from '../../../utils/mocks/setUpTest';

describe('Options component test', () => {
  mockServer();
  test('check fetching option data from server', async () => {
    render(OrderComponent());
    const options = await screen.findAllByRole('checkbox');
    expect(options).toHaveLength(2);
  });
});
