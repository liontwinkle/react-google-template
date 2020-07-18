import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import * as FullStory from '@fullstory/browser';
import * as serviceWorker from './serviceWorker';
import store, { history } from './redux/store';

import App from './components/App';

import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/features/array/find';
import 'core-js/features/array/includes';
import 'core-js/features/number/is-nan';

import './index.scss';
import 'draft-js/dist/Draft.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'antd/dist/antd.css';

FullStory.init({
  orgId: 'W49VA',
  namespace: 'FS',
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
module.hot.accept();
