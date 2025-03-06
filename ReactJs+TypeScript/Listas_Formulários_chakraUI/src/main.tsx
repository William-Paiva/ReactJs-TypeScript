

import ReactDOM from 'react-dom/client';
import { Provider } from './components/ui/provider'; 
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <App />
  </Provider>
);

