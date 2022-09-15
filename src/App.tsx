/* eslint-disable import/newline-after-import */
import { OrderContextProvider } from './utils/contexts/OrderContext';
import Router from './utils/router/Router';
import './utils/style/App.css';
function App(): JSX.Element {
  return (
    <OrderContextProvider>
      <Router />
    </OrderContextProvider>
  );
}

export default App;
