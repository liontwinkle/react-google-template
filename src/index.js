import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from "connected-react-router";
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store, {history} from './redux/store';
import * as FullStory from '@fullstory/browser'

import './index.css';
import "draft-js/dist/Draft.css";

FullStory.init({ 
  orgId: 'W49VA',
  namespace: 'FS'
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
