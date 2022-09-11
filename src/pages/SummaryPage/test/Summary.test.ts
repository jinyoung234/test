import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SummaryPage from '../SummaryPage';

describe('summary page', () => {
  test('test App component initialize value', () => {
    render(SummaryPage());
  });
});
