import { render, screen } from '../../../utils/test/customRender';
import '@testing-library/jest-dom/extend-expect';
import SummaryPage from '../SummaryPage';

describe('summary page', () => {
  test('check box and button initial state test', () => {
    render(SummaryPage());
    const checkBox = screen.getByRole('checkbox', {
      name: '주문하려는 것을 확인하셨나요?',
    });
    expect(checkBox).not.toBeChecked();
    const confirmButton = screen.getByRole('button', {
      name: '주문 확인',
    });
    expect(confirmButton).toBeDisabled();
  });
});
