import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import App from './#root/App';
import './index.css';

// Create browser history to use in the Redux store
const history = createBrowserHistory();


// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConnectedRouter history={history}>
              <App />
          </ConnectedRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
