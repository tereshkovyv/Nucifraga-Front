import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './styles/reset.css'
import './styles/common.css'
import { Provider } from 'react-redux';
import { store } from './store';
import { loadTasksAction } from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
store.dispatch(loadTasksAction());
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>);


serviceWorkerRegistration.unregister();

reportWebVitals();
