/* eslint-disable import/no-extraneous-dependencies */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompletePage from '../pages/CompletePage/CompletePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import SummaryPage from '../pages/SummaryPage/SummaryPage';

function Router(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<OrderPage />} />
        <Route path='/summary' element={<SummaryPage />} />
        <Route path='/complete' element={<CompletePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
