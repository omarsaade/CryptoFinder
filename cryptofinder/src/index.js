import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';
import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);





